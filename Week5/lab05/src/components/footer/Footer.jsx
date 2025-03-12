import { useState } from 'react';

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
        <div className="h-[380px] bg-[#1D2128] rounded-md flex text-white p-12 justify-between">
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-5">
                    <h3 className="font-['Manrope'] text-sm leading-[22px] font-bold">About Us</h3>
                    <p className="w-[507px] font-['Manrope'] text-sm leading-[22px] font-normal text-[#DEE1E6]">{aboutText}</p>
                    <div className="email">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-[380px] h-9 px-3 text-sm leading-[22px] font-normal bg-white rounded-md border border-[#BCC1CA] outline-none mr-2.5"
                        />
                        <button 
                            className="h-[38px] px-3 font-['Manrope'] text-sm leading-[22px] font-normal text-white bg-[#F44B87] rounded-md border-none hover:bg-[#F0105E]" 
                            onClick={handleSubscribe}
                        >
                            Send
                        </button>
                    </div>
                </div>
                <div className="flex align-center gap-3">
                    <img src={logoSrc} alt="Logo" className="w-[120px] h-10 object-contain translate-y-[-20%] " />
                    <span className="font-['Manrope'] text-[14px] font-normal text-[#DEE1E6]">{copyright}</span>
                    <span className="font-['Manrope'] text-[14px] font-normal text-[#DEE1E6]">{termsText}</span>
                </div>
            </div>
            <div className="flex justify-between flex-col">
                <div className="flex flex-col gap-5">
                    <h3 className="font-['Manrope'] text-sm leading-[22px] font-bold">Learn More</h3>
                    {learnMoreLinks.map((link, index) => (
                        <li key={index} className="list-none font-['Poppins'] text-sm leading-[22px] font-normal">
                            <a href={link.url} className="no-underline text-[#DEE1E6]">{link.text}</a>
                        </li>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    <h3 className="font-['Manrope'] text-sm leading-[22px] font-bold">Shop</h3>
                    {shopLinks.map((link, index) => (
                        <li key={index} className="list-none font-['Manrope'] text-sm leading-[22px] font-normal">
                            <a href={link.url} className="no-underline text-[#DEE1E6]">{link.text}</a>
                        </li>
                    ))}
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-5">
                    <h3 className="font-['Manrope'] text-sm leading-[22px] font-bold">Recipes</h3>
                        {recipeLinks.map((link, index) => (
                            <li key={index} className="list-none font-['Manrope'] text-sm leading-[22px] font-normal">
                                <a href={link.url} className="no-underline text-[#DEE1E6]">{link.text}</a>
                            </li>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;