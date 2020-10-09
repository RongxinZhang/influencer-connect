import React from "react";
import { login } from "../requests/users";
import "./Login.scss";
import { useHistory } from "react-router-dom";

const Login = function (props) {
  const history = useHistory();

  const setUserToBrand = () => {
    // TEMP BRAND USERS
    login({
      email: "jaclyn@jaclynhillcosmetics",
      password: "password",
    })
      .then((data) => {
        props.updateUser(data);
        history.push("/tasks");
        // window.location = "/tasks";
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
