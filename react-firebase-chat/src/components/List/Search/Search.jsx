import { useState } from "react";
import "./search.css"

const Search = () => {
    const [addMode, setAddMode] = useState(false)
    return (
        <div className="Search">
            <div className="SearchBar">
                <img src="./search.png" alt="" />
                <input type="text" placeholder="Search" />
            </div>
            <img
                src={addMode ? "./minus.png" : "./plus.png"}
                alt=""
                className="Add"
                onClick={() => setAddMode((prev) => !prev)}
            />
        </div>
    )
}

export default Search