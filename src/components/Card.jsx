const Card = ({ content, color }) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-[${color}]/30`}
    >
      <img src={content.iconUrl} width={32} height={32} alt="icon" />
      <div className="flex flex-col gap-2">
        <h3 className="h3 font-semibold">{content.title}</h3>
        <p className="body-1 text-gray-300">{content.text}</p>
      </div>
    </div>
  );
};

export default Card;
