import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";

const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock, resetChat } = useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    auth.signOut();
    resetChat();
  };

  return (
    <div className="Detail">
      <div className="User">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Hey im at schooll sup bruv?</p>
      </div>
      <div className="Info">
        <div className="Option">
          <div className="Title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="Option">
          <div className="Title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="Option">
          <div className="Title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="Photos">
            <div className="PhotoItem">
              <div className="PhotoDetail">
                <img
                  src="https://i.chzbgr.com/full/9735745536/hC530FFB6/person-watching-movement-pizza-guys-every-on-delivery-app"
                  alt=""
                />
                <span>photo_2025_2_.png</span>
              </div>
              <img src="./download.png" alt="" className="Icon" />
            </div>
            <div className="PhotoItem">
              <div className="PhotoDetail">
                <img
                  src="https://i.chzbgr.com/full/9735745536/hC530FFB6/person-watching-movement-pizza-guys-every-on-delivery-app"
                  alt=""
                />
                <span>photo_2025_2_.png</span>
              </div>
              <img src="./download.png" alt="" className="Icon" />
            </div>
            <div className="PhotoItem">
              <div className="PhotoDetail">
                <img
                  src="https://i.chzbgr.com/full/9735745536/hC530FFB6/person-watching-movement-pizza-guys-every-on-delivery-app"
                  alt=""
                />
                <span>photo_2025_2_.png</span>
              </div>
              <img src="./download.png" alt="" className="Icon" />
            </div>
            <div className="PhotoItem">
              <div className="PhotoDetail">
                <img
                  src="https://i.chzbgr.com/full/9735745536/hC530FFB6/person-watching-movement-pizza-guys-every-on-delivery-app"
                  alt=""
                />
                <span>photo_2025_2_.png</span>
              </div>
              <img src="./download.png" alt="" className="Icon" />
            </div>
          </div>
        </div>
        <div className="Option">
          <div className="Title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      </div>
      <div className="Actions">
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are Blocked!"
            : isReceiverBlocked
              ? "User blocked"
              : "Block User"}
        </button>
        <button className="Logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;