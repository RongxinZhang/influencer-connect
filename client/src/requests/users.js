import axios from "axios";

const BASE_URL = "http://localhost:3000";

const login = function (userObj) {
  return axios
    .post(`${BASE_URL}/users/login`, userObj)
    .then((res) => {
      if (res.status === 200 && res.data.data) {
        const user = res.data.data;
        // IMPORTANT: Store JWT to localstorage

        const resObj = {
          name: `${user.first_name} ${user.last_name}`,
          ...user,
        };

        localStorage.setItem("user", JSON.stringify(resObj));

        return resObj;
      }
    })
    .catch((err) => {
      return err;
    });
};

export { login };
