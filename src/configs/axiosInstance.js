import React from "react";
import axios from "axios";
import CONST from "../utils/constant";

const axiosInstance = axios.create({
 //  baseURL: `${process.env.MOVIE_SEARCH_BASE_URL}`,
 baseURL: CONST.MOVIE_BASE_URL,
});

export default axiosInstance;
