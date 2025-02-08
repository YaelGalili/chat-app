import List from "./components/List/List";
import Chat from "./components/Chat/Chat";
import Detail from "./components/Detail/Detail";
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) {
    return <div className="Loading">Loading...</div>;
  }

  return (
    <div className="Container">
      {
        currentUser ?
          (
            <>
              <List />
              {chatId && <Chat />}
              {chatId && <Detail />}
            </>
          )
          :
          (
            <Login />
          )
      }
      <Notification />
    </div>
  );
};

export default App;