// src/api/axiosConfig.js
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// const apiClient = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8000",
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;
