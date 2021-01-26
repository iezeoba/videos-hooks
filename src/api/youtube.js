import axios from "axios";

const KEY = "AIzaSyANQToKlTgWTGNbyUYK3c4zUwzT6fYgAbw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});
