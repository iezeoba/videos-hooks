//coding the videos app using hooks//
import React, { useState, useEffect } from "react";
//import youtube from "./api/youtube";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import useVideos from "./hooks/useVideos";

const App = () => {
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, onSearchQuerySubmit] = useVideos("football");

  // useEffect(() => {
  //   onSearchQuerySubmit("football");
  // }, []);

  // const onSearchQuerySubmit = async (searchquery) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: searchquery,
  //     },
  //   });
  //   setVideos(response.data.items);
  //   setSelectedVideo(response.data.items[0]);
  // };

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onSearchQuerySubmit={onSearchQuerySubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              videoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
