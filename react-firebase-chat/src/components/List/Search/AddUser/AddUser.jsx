import "./add-user.css";

const AddUser = () => {
    return (
        <div className="AddUser">
            <form>
                <input type="text" placeholder="Username" name="username" />
                <button>Search</button>
            </form>
            <div className="User">
                <div className="Detail">
                    <img src="./avatar.png" alt="" />
                    <span>Jane Doe</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    );
};

export default AddUser;