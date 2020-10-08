import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header = function (props) {
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");

  //   if (storedUser) {
  //     setUser(() => {
  //       return JSON.parse(storedUser);
  //     });
  //   }
  // }, []);

  // const updateUser = function (userObj) {
  //   setUser(() => {
  //     return userObj;
  //   });
  // };

  return (
    <section>
      <header>
        <div className="header_user_info">
          <p>{props.user && props.user.name}</p>
        </div>
      </header>
    </section>
  );
};

export default Header;
