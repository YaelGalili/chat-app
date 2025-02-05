import List from "./components/List/List";
import Chat from "./components/Chat/Chat";
import Detail from "./components/Detail/Detail";
import Login from "./components/Login/Login";

const App = () => {
  const user = false;

  return (
    <div className="Container">
      {
        user ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (<Login />)
      }
    </div>
  );
};

export default App;