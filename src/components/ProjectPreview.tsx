'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ProjectPreviewProps {
  images: {
    src: string;
    alt: string;
  }[];
  isOpen: boolean;
  onClose: () => void;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ images, isOpen, onClose }) => {
  const [isGridView, setIsGridView] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (dragRef.current?.offsetLeft || 0));
    setScrollLeft(dragRef.current?.scrollLeft || 0);
  };

  // Handle drag end
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragRef.current) return;
    e.preventDefault();
    const x = e.pageX - (dragRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    dragRef.current.scrollLeft = scrollLeft - walk;
  };

  // ✅ Handle mouse wheel for vertical scroll
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const delta = e.nativeEvent.deltaY;

    // Allow natural vertical scroll inside grid
    el.scrollTop += delta;
  };

  // Handle touch events
  useEffect(() => {
    const element = dragRef.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent) => {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - (element.offsetLeft || 0));
      setScrollLeft(element.scrollLeft || 0);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - (element.offsetLeft || 0);
      const walk = (x - startX) * 2;
      element.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchmove', handleTouchMove);
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, startX, scrollLeft]);

  // Handle click outside
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === containerRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
      style={{ overscrollBehavior: 'contain' }}
    >
      <div className="relative w-full h-full max-h-screen p-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="fixed right-6 top-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* View toggle button */}
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="fixed left-6 top-6 z-50 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
        >
          {isGridView ? 'Single View' : 'Grid View'}
        </button>

        {isGridView ? (
          <div
            ref={dragRef}
            onWheel={handleWheel} // ✅ Fix vertical scroll with wheel
            className="mt-16 overflow-y-auto max-h-[calc(100vh-6rem)] scrollbar-custom"
            style={{ overscrollBehavior: 'contain' }}
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
              style={{
                userSelect: 'none',
                WebkitUserSelect: 'none',
              }}
            >
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative cursor-pointer group bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-all duration-300"
                  onClick={(e) => {
                    if (!isDragging) {
                      e.stopPropagation();
                      setSelectedImage(idx);
                      setIsGridView(false);
                    }
                  }}
                >
                  <div className="relative w-full pt-[80%]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain p-2 rounded-lg group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 25vw"
                      quality={85}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Single image view
          <div className="flex flex-col items-center mt-16">
            <div className="relative w-full max-h-[75vh] rounded-lg bg-white/5 p-4">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={640}
                height={640}
                className="object-contain w-full h-full"
                priority
                quality={100}
              />
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === selectedImage ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPreview;
