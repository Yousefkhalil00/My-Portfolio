const Card = ({ icon, title, description }) => {
  return (
    <div
      className="
      bg-card
      rounded-2xl 
      p-8 
      border border-white/5
      shadow-lg 
      hover:border-glow
      hover:shadow-[0px_0px_30px_3px]
      hover:shadow-shadow
      transition-all duration-300
    "
    >
      <div className="flex items-center gap-4">
        <div
          className="
          w-14 h-14 
          bg-indigo-500/10 
          rounded-xl 
          flex items-center justify-center
        "
        >
          {icon}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
