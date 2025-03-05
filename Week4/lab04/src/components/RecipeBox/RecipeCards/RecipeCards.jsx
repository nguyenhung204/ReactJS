import './RecipeCards.css';
const RecipeCards = ({ image, title, time }) => {
    return (
      <div className="card">
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <div className="card-footer">
            <span className="card-time">{time} minutes</span>
          </div>
        </div>
      </div>
    );
  };
  export default RecipeCards;