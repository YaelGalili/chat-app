import "./chat-list.css";
import { useUserStore } from "../../../lib/userStore";
import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userChats", currentUser.id),
      async (res) => {
        const items = res.data().chats;
        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);
          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      });

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  return (
    <div className="ChatList">
      {chats.map((chat) => (
        <div className="Item" key={chat.chatId}>
          <img src={chat.user.avatar || "./avatar.png"} alt="" />
          <div className="Text">
            <span>{chat.user.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;