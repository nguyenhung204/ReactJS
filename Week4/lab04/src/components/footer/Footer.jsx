import { useState } from 'react';
import './Footer.css';

const Footer = ({
    logoSrc = "./src/assets/images/logo-footer.png",
    onSubscribe = () => { },
    aboutText = "Welcome to our website, a wonderful place to explore and learn how to cook like a pro.",
    learnMoreLinks = [
        { text: "Our Cooks", url: "#" },
        { text: "See Our Features", url: "#" },
        { text: "FAQ", url: "#" }
    ],
    shopLinks = [
        { text: "Gift Subscription", url: "#" },
        { text: "Send Us Feedback", url: "#" }
    ],
    recipeLinks = [
        { text: "What to Cook This Week", url: "#" },
        { text: "Pasta", url: "#" },
        { text: "Dinner", url: "#" },
        { text: "Healthy", url: "#" },
        { text: "Vegetarian", url: "#" },
        { text: "Vegan", url: "#" },
        { text: "Christmas", url: "#" }
    ],
    copyright = "2023 Chefify Company",
    termsText = "Terms of Service |  Privacy Policy"
}) => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        onSubscribe(email);
        setEmail('');
    };

    return (
        <div className="footer">
            <div className="inf1">
                <div className="contain">
                    <h3>About Us</h3>
                    <p className="text">{aboutText}</p>
                    <div className="email">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="send" onClick={handleSubscribe}>Send</button>
                    </div>
                </div>
                <div className="tag">
                    <img src={logoSrc} alt="Logo" />
                    <span>{copyright}</span>
                    <span>{termsText}</span>
                </div>
            </div>
            <div className="inf2">
                <div className="list">
                    <h3>Learn More</h3>
                    {learnMoreLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </div>
                <div className="list">
                    <h3>Shop</h3>
                    {shopLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </div>
            </div>
            <div className="inf3">
                <div className="list">
                    <h3>Recipes</h3>
                        {recipeLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.url}>{link.text}</a>
                            </li>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;