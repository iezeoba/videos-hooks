import React from "react";
import "../styles/videoitem.css";

//const VideoItem = ({video, videoSelected}) => { //below line can be destructured like this, ie extracting the content of the props being received//then there'll be no need to use 'props.' when referencing the variables//
const VideoItem = (props) => {
  return (
    <div
      className="video-item item"
      onClick={() => props.videoSelected(props.video)}
    >
      <img
        className="ui image"
        alt="props.video.snippet.title"
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
//information can be passed from a child to the parent thru a callback function passed into the props//
