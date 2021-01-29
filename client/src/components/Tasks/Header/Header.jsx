import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import "./Header.scss";

const Header = function (props) {
  const logout = function (userObj) {
    props.handleLogout();
    window.location = "/login";
  };

  return (
    <Fragment>
      <header>
        <div className="header_user_info">
          <div
            style={{
              backgroundImage: `url(${props.application.profilePicture})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <p>{props.application.name}</p>
        </div>
        <div className="header_buttons">
          <Link
            to={props.application.mediaKitLink}
            target="_blank"
            className="button"
          >
            View MediaKit
          </Link>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
