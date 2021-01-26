import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchQuery) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    onSearchQuerySubmit(defaultSearchQuery);
  }, [defaultSearchQuery]);

  const onSearchQuerySubmit = async (searchquery) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchquery,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, onSearchQuerySubmit];
};

export default useVideos;
