import axios from "axios";

export const getApi = (url) =>
  axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
