import './RecipeBox.css';
import RecipeCards from './RecipeCards/RecipeCards';

const data = [
    {
        image: './src/assets/images/1.png',
        title: 'Lotus delight salad',
        time: '20',
    },
    {
        image: './src/assets/images/2.png',
        title: 'Pumpkin soup',
        time: '30',
    },
    {
        image: './src/assets/images/3.png',
        title: 'Caramelized onion pasta',
        time: '40',
    },
    {
        image: './src/assets/images/4.png',
        title: 'Vegan burger',
        time: '50',
    },
    {
        image: './src/assets/images/5.png',
        title: 'Avocado toast',
        time: '60',
    },
    {
        image: './src/assets/images/6.png',
        title: 'Chocolate cake',
        time: '70',
    },
    {
        image: './src/assets/images/7.png',
        title: 'Spicy chicken wings',
        time: '80',
    },
    {
        image: './src/assets/images/8.png',
        title: 'Mushroom risotto',
        time: '90',
    },
]

function RecipeBox() {
    return (
        <div className="container">
            <h1 className="title">Emma Gonzalez's Recipe Box</h1>
            <div className="profile-container">
                <img
                    className="profile-image"
                    src="./src/assets/images/avt-big.png"
                    alt="Emma Gonzalez"
                />
                <div className="profile-info">
                    <p className="description">
                        Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
                    </p>
                    <div className="subscribe-section">
                        <span className="subscribers">6.5k Subscribes</span>
                        <button className="share-btn">Share</button>
                    </div>
                </div>
            </div>
            <div className="tabs">
                <span className="tab active">Saved Recipes</span>
                <span className="tab">Folders</span>
                <span className="tab">Recipes by Genevieve</span>
            </div>

            <div className="recipe-card">
                {data.map((recipe, index) => (
                    <RecipeCards
                        key={index}
                        image={recipe.image}
                        title={recipe.title}
                        time={recipe.time}
                    />
                ))}
            </div>
        </div>

    );
}
export default RecipeBox;