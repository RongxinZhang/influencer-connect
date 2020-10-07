import axios from "axios";

const BASE_URL = "http://localhost:3000";

const login = function (userObj) {
  return axios
    .post(`${BASE_URL}/users/login`, userObj)
    .then((res) => {
      console.log(res);
      if (res.status === 200 && res.data.data) {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        console.log("IN");
        return res.data.data;
      }
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export { login };
