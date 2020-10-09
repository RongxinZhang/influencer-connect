import React from "react";
// import { useHistory } from "react-router-dom";
import "./Header.scss";

const Header = function (props) {
  const logout = function (userObj) {
    props.handleLogout();
    window.location = "/login";
  };

  return (
    <section>
      <header>
        <div className="header_user_info">
          <div
            style={{
              backgroundImage:
                "url(https://sheleadsafrica.org/wp-content/uploads/2018/09/IMG_5870-copy-1024x683.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <p>
            Morphe Brushes: <span>{props.user && props.user.name}</span>
          </p>
        </div>
        <div className="header_buttons">
          <button onClick={logout}>logout</button>
          <button>setting</button>
        </div>
      </header>
    </section>
  );
};

export default Header;
