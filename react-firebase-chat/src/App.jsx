import List from "./components/List/List";
import Chat from "./components/Chat/Chat";
import Detail from "./components/Detail/Detail";
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";

const App = () => {

  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

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
              <Chat />
              <Detail />
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