function apiGetUsers(searchTerm) {
  return axios({
    url: "https://62f50948535c0c50e768499f.mockapi.io/users",
    method: "GET",
    params: {
     loaiND: searchTerm,
     
    },
  });
}

function apiaddUser(user) {
  return axios({
    url: "https://62f50948535c0c50e768499f.mockapi.io/users",
    method: "POST",
    data: user,
  });
}

function apiDeleteUser(userId) {
  return axios({
    url: `https://62f50948535c0c50e768499f.mockapi.io/users/${userId}`,
    method: "DELETE",
  });
}

function apiGetUserById(userId) {
  return axios({
    url: `https://62f50948535c0c50e768499f.mockapi.io/users/${userId}`,
    method: "GET",
  });
}

function apiUpdateUser(userId, user) {
  return axios({
    url: `https://62f50948535c0c50e768499f.mockapi.io/users/${userId}`,
    method: "PUT",
    data: user,
  });
}
