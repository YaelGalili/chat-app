import AddUser from "./AddUser/AddUser";
import "./chat-list.css";

const ChatList = () => {
  return (
    <div className="ChatList">
      <div className="Item">
        <img src="./avatar.png" alt="" />
        <div className="Text">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="Item">
        <img src="./avatar.png" alt="" />
        <div className="Text">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="Item">
        <img src="./avatar.png" alt="" />
        <div className="Text">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="Item">
        <img src="./avatar.png" alt="" />
        <div className="Text">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="Item">
        <img src="./avatar.png" alt="" />
        <div className="Text">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="Item">
        <img src="./avatar.png" alt="" />
        <div className="Text">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="Item">
        <img src="./avatar.png" alt="" />
        <div className="Text">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <AddUser/>
    </div>
  );
};

export default ChatList;