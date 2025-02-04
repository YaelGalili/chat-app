import List from "./components/List/List";
import Chat from "./components/Chat/Chat";
import Detail from "./components/Detail/Detail";

const App = () => {
  return (
    <div className="Container">
      <List />
      <Chat />
      <Detail />
    </div>
  );
};

export default App;