import { useState } from "react";
import AddUser from "./AddUser/AddUser";
import "./search.css";

const Search = ({ setSearchInput }) => {
    const [addMode, setAddMode] = useState(false);

    return (
        <div className="Search">
            <div className="SearchBar">
                <img src="./search.png" alt="" />
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
            <img
                src={addMode ? "./minus.png" : "./plus.png"}
                alt=""
                className="Add"
                onClick={() => setAddMode((prev) => !prev)}
            />
            {addMode && <AddUser />}
        </div>
    );
};

export default Search;
