import React from "react";
import { login } from "../requests/users";
import "./Login.scss";

const Login = function (props) {
  const setUserToBrand = () => {
    // TEMP BRAND USERS
    login({
      email: "jaclyn@jaclynhillcosmetics",
      password: "password",
    })
      .then((data) => {
        props.updateUser(data);
        window.location = "/tasks";
      })
      .catch((err) => {});
  };

  return (
    <div className="login_btn">
      <button className="login_btn--brand" onClick={setUserToBrand}>
        Login as Brand
      </button>
      <button className="login_btn--influencer"> Login as Influencer</button>
    </div>
  );
};

export default Login;
