import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
  };

  return (
    <div className="Chat">
      <div className="Top">
        <div className="User">
          <img src="./avatar.png" alt="" />
          <div className="Text">
            <span>Jane Doe</span>
            <p>sach paluchish papiset!</p>
          </div>
        </div>
        <div className="Icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="Center">
        <div className="Message">
          <img src="./avatar.png" alt="" />
          <div className="Text">
            <p>this is a message yobani svet, tri paloski papiset vartou :)</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="Message Own">
          <div className="Text">
            <p>this is a message yobani svet, tri paloski papiset vartou :)</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="Message">
          <img src="./avatar.png" alt="" />
          <div className="Text">
            <p>this is a message yobani svet, tri paloski papiset vartou :)</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="Message Own">
          <div className="Text">
            <p>this is a message yobani svet, tri paloski papiset vartou :)</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="Message">
          <img src="./avatar.png" alt="" />
          <div className="Text">
            <p>this is a message yobani svet, tri paloski papiset vartou :)</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="Message Own">
          <div className="Text">
            <img src="https://marketplace.canva.com/EAFbdJ-uI_A/3/0/1600w/canva-grey-photographic-cat-funny-meme-eKWKfRGEwc4.jpg" alt="" />
            <p>this is a message yobani svet, tri paloski papiset vartou :)</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="Bottom">
        <div className="Icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="Emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="Picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="SendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;