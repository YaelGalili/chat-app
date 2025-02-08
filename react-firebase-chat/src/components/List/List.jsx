import { useState } from "react";
import ChatList from "./ChatList/ChatList";
import "./list.css";
import UserInfo from "./UserInfo/UserInfo";
import Search from "./Search/Search";

const List = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="List">
      <UserInfo />
      <Search setSearchInput={setSearchInput} />
      <ChatList searchInput={searchInput} />
    </div>
  );
};

export default List;