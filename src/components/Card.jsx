const Card = ({ content, color }) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-gray-600 p-8 shadow-xl transition`}
    >
      <img src={content.iconUrl} width={40} height={40} alt="icon" />
      <div className="flex flex-col gap-2">
        <h3 className="h3 font-semibold">{content.title}</h3>
        <p className="body-1 text-gray-300">{content.text}</p>
      </div>
    </div>
  );
};

export default Card;
