import React from 'react';
// import MyVideo from "../../content/videos/my-video.mp4";

const VideoTest = ({props}) => (
    // <div className="video">
    //     <iframe
    //     src="https://www.youtube.com/embed/eb_4YpWq0yg"
    //     title="test title"
    //     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //     frameBorder="0"
    //     webkitallowfullscreen="true"
    //     mozallowfullscreen="true"
    //     allowFullScreen
    //     />
    // </div>

    <video
        autoPlay
        muted
        loop
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            height: '100%',
            width: '100%',
            zIndex: '-1',
            objectFit: 'fill',
            objectPosition: 'center'
        }}
        src="https://www.youtube.com/embed/eb_4YpWq0yg"
        >
        <source src="https://www.youtube.com/embed/eb_4YpWq0yg" type="video/youtube" />
        Your device does not support playing 'video/youtube' videos
    </video>
)

export default VideoTest