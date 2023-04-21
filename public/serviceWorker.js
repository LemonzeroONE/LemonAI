const CHATGPT_NEXT_WEB_CACHE = "chatgpt-next-web-cache";

self.addEventListener("activate", function (event) {
  console.log("ServiceWorker activated.");
});

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CHATGPT_NEXT_WEB_CACHE).then(function (cache) {
      return cache.addAll([]);
    }),
  );
});

self.addEventListener("fetch", (e) => {});
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

// Add authorization header to requests
api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export const login = async (username, password) => {
  const response = await api.post('/login', {
    username,
    password,
  });
  localStorage.setItem('accessToken', response.data.accessToken);
  return response.data;
};

// Other API methods...