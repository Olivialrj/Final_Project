import { checkResponse } from "./newsApi";

// const baseUrl = "";

// export const register = (email, password, username) => {
//   return fetch(`${baseUrl}/signup`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password, username }),
//   }).then(checkResponse);
// };

// export const authorisation = (email, password) => {
//   return fetch(`${baseUrl}/signin`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   }).then(checkResponse);
// };

//test
export const register = (email, password, username) => {
  return Promise.resolve({
    data: { username, email, _id: "fake-id" },
    message: "User registered successfully",
  });
};
export const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  return Promise.resolve({
    data: { name: "fake user", email: "fake@example.com", _id: "fake-id" },
  });
};
