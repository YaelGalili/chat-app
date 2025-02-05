import "./detail.css";

const Detail = () => {
  return (
    <div className="Detail">
      <div className="User">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
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
        <button>Block User</button>
      </div>
    </div>
  );
};

export default Detail;