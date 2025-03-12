const RecipeCards = ({ image, title, time }) => {
  return (
    <div className="w-[300px] h-[330px] overflow-hidden bg-white shadow-md rounded-xl">
      <div className="card-image">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
      <div className="p-[10px_20px]">
        <h3 className="text-base font-bold my-[5px]">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-[#ff4081]">{time} minutes</span>
        </div>
      </div>
    </div>
  );
};
export default RecipeCards;