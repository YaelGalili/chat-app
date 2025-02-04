import "./chat.css"

const Chat = () => {
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
      <div className="Center"></div>
      <div className="Bottom">
        <div className="Icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message..." />
        <div className="emoji">
          <img src="./emoji.png" alt="" />
        </div>
        <button className="SendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat