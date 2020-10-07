const authHeader = function () {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.jwtToken) {
    // for Node.js Express back-end
    return user.jwtToken;
  } else {
    return "";
  }
};

export { authHeader };
