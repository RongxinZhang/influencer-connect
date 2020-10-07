import React from "react";
import { login } from "../requests/users";

const setUserToBrand = () => {
  login({
    email: "a@d.com",
    password: "password",
  })
    .then((data) => {
      console.log("dataLOGGED ", data);
    })
    .catch((err) => {
      console.log("ERR", err);
    });
  // const brandUser = JSON.stringify({
  //   id: 2,
  //   type: "brands",
  // });
};

// const userFromLocalStorage = localStorage.getItem("Influencer::user");
// const loggedInUser = JSON.parse(userFromLocalStorage || "{}");

export default function Login(props) {
  // if (loggedInUser.id) window.location.href = "/tasks";
  return (
    <div>
      <button onClick={setUserToBrand}>Login as Brand</button>
      {/* <button onClick={setUserToInfluencer}>Login as Influencer</button> */}
    </div>
  );
}
