const TechIcon = ({ icon }) => {
    return (
// ... existing code ...
<div className="flex-none md:w-32 md:h-32 w-40 h-20 bg-black flex items-center justify-center gradient-border marquee-item hover:-translate-y-3 transition-all duration-100">
  <img src={icon.image} alt={icon.name} className="md:size-16 size-10" />
</div>
// ... existing code ...
    );
  };
  
  export default TechIcon;
  