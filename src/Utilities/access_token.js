const config_access_token = {
  headers: {
    token: `bearer ${localStorage.getItem("access_token")}`,
  },
};

export { config_access_token };
