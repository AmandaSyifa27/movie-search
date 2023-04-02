import axiosInstance from "../configs/axiosInstance";

const APIKey = "k_bu997qze";

const APIRequest = {
 getSearchCar: async (expression) => {
  try {
   const result = await axiosInstance.get(
    `/SearchTitle/${APIKey}/${expression}`
   );
   if (result.status === "200") {
   }
   return result;
  } catch (error) {
   throw new Error(error);
  }
 },

 getPopularMovies: async () => {
  try {
   const result = await axiosInstance.get(`/MostPopularMovies/${APIKey}`);
   return result;
  } catch (error) {
   throw new Error(error);
  }
 },

 getTop250Movies: async () => {
  try {
   const result = await axiosInstance.get(`/Top250Movies/${APIKey}`);
   return result;
  } catch (error) {
   throw new Error(error);
  }
 },

 getBoxOfficeMovies: async () => {
  const result = await axiosInstance.get(`/BoxOffice/${APIKey}`);
  return result;
 },

 getMoviePosters: async (id) => {
  const result = await axiosInstance.get(`/Posters/${APIKey}/${id}`);
  return result;
 },

 getMovieFullCast: async (id) => {
  const result = await axiosInstance.get(`/FullCast/${APIKey}/${id}`);
  return result;
 },

 getMovieTrailer: async (id) => {
  const result = await axiosInstance.get(`/Trailer/${APIKey}/${id}`);
  return result;
 },

 getMovieAwards: async (id) => {
  const result = await axiosInstance.get(`/Awards/${APIKey}/${id}`);
  return result;
 },
};

export default APIRequest;
