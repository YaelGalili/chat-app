import "./add-user.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { useState } from "react";

const AddUser = () => {
    const [user, setUser] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");

        try {
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("username", "==", username));
            const querySnapShot = await getDocs(q);

            if (!querySnapShot.empty) {
                setUser(querySnapShot.docs[0].data());
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="AddUser">
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Username" name="username" />
                <button>Search</button>
            </form>
            {user && <div className="User">
                <div className="Detail">
                    <img src={user.avatar || "./avatar.png"} alt="" />
                    <span>{user.username}</span>
                </div>
                <button>Add User</button>
            </div>}
        </div>
    );
};

export default AddUser;