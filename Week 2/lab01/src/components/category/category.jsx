import { useState } from 'react';

const data = [
    {name : "Java", description : "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."},
    {name : "Python", description : "Python is an interpreted, high-level and general-purpose programming language."},  
    {name : "JavaScript", description : "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification."},
    {name : "C#", description : "C# is a general-purpose, multi-paradigm programming language."},
    {name : "PHP", description : "PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language."}
]

function Categoty() {
    const [selectedLang, setSelectedLang] = useState(null);

    const handleClick = (lang) => {
        setSelectedLang(lang);
    };

    return (
        <div>
            <div className="buttons">
                {data.map((lang, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleClick(lang)}
                        style={{ margin: '5px' }}
                    >
                        {lang.name}
                    </button>
                ))}
            </div>
            
            {selectedLang && (
                <div className="info" style={{ marginTop: '20px' }}>
                    <h3>{selectedLang.name}</h3>
                    <p>{selectedLang.description}</p>
                </div>
            )}
        </div>
    );
}

export default Categoty;