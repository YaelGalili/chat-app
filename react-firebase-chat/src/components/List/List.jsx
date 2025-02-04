import ChatList from "./ChatList/ChatList";
import "./list.css";
import UserInfo from "./UserInfo/UserInfo";
import Search from "./Search/Search";

const List = () => {
  return (
    <div className="List">
      <UserInfo />
      <Search />
      <ChatList />
    </div>
  );
};

export default List;