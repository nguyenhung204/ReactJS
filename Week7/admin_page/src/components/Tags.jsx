import { useEffect, useState } from "react";

function Tags(){
    const [data, setTags] = useState([]);
    useEffect(() => {
        fetch("https://671891927fc4c5ff8f49fcac.mockapi.io/test")
            .then((response) => response.json())
            .then((data) => setTags(data));
    }, []);
    return (
        <div className="tags flex justify-between align-items-center flex-wrap">
            {data.map((tag) => (
                <div key={tag.id} className="tag-item">
                    <span className="tag-name">{tag.title}</span>
                    <h2 className="tag-value">{tag.value}</h2>
                    <span className="tag-unit">{tag.change} period of change</span>
                </div>
            ))}
        </div>
    )

}
export default Tags;