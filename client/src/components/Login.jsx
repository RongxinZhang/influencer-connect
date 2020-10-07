import React from "react";
import { login } from "../requests/users";

const Login = function (props) {
  const setUserToBrand = () => {
    // TEMP BRAND USERS
    login({
      email: "RongxinZhang@gmail.com",
      password: "password",
    })
      .then((data) => {
        props.updateUser(data);
        window.location = "/tasks";
      })
      .catch((err) => {});
  };

  return (
    <div>
      <button onClick={setUserToBrand}>Login as Brand</button>
      {/* <button onClick={setUserToInfluencer}>Login as Influencer</button> */}
    </div>
  );
};

export default Login;
