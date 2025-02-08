import { useEffect, useState, useRef } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState();

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", "C2rJM4X0AAuyQKvK7oKy"), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, []);

  console.log(chat);

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
        <div ref={endRef}></div>
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