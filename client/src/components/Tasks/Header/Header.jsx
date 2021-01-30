import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import "./Header.scss";

const Header = function (props) {
  const handleApprove = () => {
    console.log("approve");
  };

  const handleViewChange = (view) => {
    console.log("viewChange");
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
        <button className="button--approve" onClick={handleApprove}>
          Approve: <span>3 days left</span>
        </button>
        <button className="button--mediakit" onClick={handleViewChange}>
          Show MediaKit
        </button>
      </header>
    </Fragment>
  );
};

export default Header;
