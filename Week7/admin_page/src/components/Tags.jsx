import { useEffect, useState } from "react";
import cart from "../assets/cart.png";
import user from "../assets/person.png";
import dollar from "../assets/money.png";

function Tags() {
    const [data, setTags] = useState([]);
    useEffect(() => {
        fetch("https://671891927fc4c5ff8f49fcac.mockapi.io/test")
            .then((response) => response.json())
            .then((data) => setTags(data));
    }, []);
    return (
        <div className="flex justify-between flex-wrap gap-4">
            {data.map((tag) => (
                <div
                    key={tag.id}
                    className={`flex flex-col justify-between p-6 rounded-xl shadow-sm h-[150px] md:w-[30%] ${tag.id === "1"
                            ? "bg-[#FEF0F5FF]"
                            : tag.id === "2"
                                ? "bg-[#F0F6FFFF]"
                                : "bg-[#F1F8FDFF]"
                        }`}
                >
                    <div className="flex justify-between items-start mb-5">
                        <div>
                            <span className="text-sm font-semibold text-gray-700">{tag.title}</span>
                            <h2 className="text-3xl font-bold text-gray-900 mt-1">{tag.value.toLocaleString()}</h2>
                        </div>

                        <img
                            src={tag.id === "1" ? cart : tag.id === "2" ? user : dollar}
                            alt="icon"
                            className="object-cover w-[80px] h-[80px]"
                        />

                    </div>
                    <span
                        className={`text-sm  ${tag.change > 0 ? "text-green-600" : "text-red-500"
                            }`}
                    >
                        ▲ {tag.change}% period of change
                    </span>
                </div>
            ))}
        </div>

    )

}
export default Tags;