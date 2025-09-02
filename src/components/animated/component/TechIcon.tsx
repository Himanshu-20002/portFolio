import Image from "next/image";

type TechIconProps = {
  icon: {
    image: string;
    name: string;
  };
};

const TechIcon = ({ icon }: TechIconProps) => {
  return (
    // ... existing code ...
    <div className="flex-none md:w-32 md:h-32 w-40 h-20 bg-black flex items-center justify-center gradient-border marquee-item hover:-translate-y-3 transition-all duration-100">
      <Image src={icon.image} width={64}    // 16 * 4 for md:size-16
        height={64} alt={icon.name} className="md:size-16 size-10" />
    </div>
    // ... existing code ...
  );
};

export default TechIcon;
