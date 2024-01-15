import './VideoPlayer3.css';

import { useEffect,useRef } from 'react';

function VideoPlayer3(props) {
    const {width, height} = props;
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
        if (cloudinaryRef.current) return;
        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current,{
            cloud_name: 'duc6iwysb'
        })

    }, []);
    return (
    <video
    ref={videoRef}
    data-cld-public-id = "q8vsil0c2rdktsrdzvx0"
    width={width}
    height = {height}
    controls
    {...props}
    />
    );
} ;

export default VideoPlayer3