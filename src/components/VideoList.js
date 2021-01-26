import React from "react";
import VideoItem from "./VideoItem";

//const VideoList = ({videos, videoSelect}) => { //below line can be destructured like this, ie extracting the content of the props being received//then there'll be no need to use 'props.' when referencing the variables//
const VideoList = (props) => {
  const returnedVideos = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        videoSelected={props.videoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{returnedVideos}</div>;
};

export default VideoList;
