// First we need to import axios.js
import Axios from "axios";

const getLocalUser = () => {
  const localStorageUser = localStorage.getItem("corcusAuth");
  // Do https request to check is Token is expired.
  if (localStorageUser) {
    try {
      const userObj = JSON.parse(localStorageUser);
      if (userObj.jwtAuthToken && userObj.jwtRefreshToken) return userObj;
    } catch (err) {
      return false;
    }
  }
};

// Next we make an 'instance' of it
const axios = Axios.create();

const updateAuthHeader = () => {
  const user = getLocalUser();

  if (user && user.jwtAuthToken && user.jwtRefreshToken) {
    // Where you would set stuff like your 'Authorization' header, etc ...
    axios.defaults.headers.common["authorization"] = user.jwtAuthToken;
    axios.defaults.headers.common["x-refresh-token"] = user.jwtRefreshToken;
  }
};

updateAuthHeader();

export { axios, updateAuthHeader };
