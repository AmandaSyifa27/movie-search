import React from "react";
import axios from "axios";
import CONST from "../utils/constant";

const axiosInstance = axios.create({
 baseURL: CONST.MOVIE_BASE_URL,
});

export default axiosInstance;
