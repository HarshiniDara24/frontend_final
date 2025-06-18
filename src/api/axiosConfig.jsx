// src/api/axiosConfig.js
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;




const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://root-cause-identification.onrender.com",
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;
