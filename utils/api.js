import { getToken } from "./token";
import { checkResponse } from "./newsApi";

const baseUrl = "https://api.news-explorer.students.nomoredomains.xyz";

const getArticles = () => {
  return fetch(`${baseUrl}/articles`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then(checkResponse);
};

const deleteArticle = (articleId) => {
  const token = getToken();
  return fetch(`${baseUrl}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

const saveArticle = (article) => {
  const token = getToken();
  return fetch(`${baseUrl}/articles`, {
    method: "POST",
  });
};

const unsaveArticle = (articleId) => {
  const token = getToken();
  return fetch(`${baseUrl}/articles/${articleId}`, {
    method: "DELETE",
  });
};

const getToken = () => {
  return localStorage.getItem("token");
};

export { getArticles, deleteArticle, saveArticle, unsaveArticle };
