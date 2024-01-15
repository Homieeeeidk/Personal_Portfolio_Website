import './VideoPlayer2.css';

import { useEffect,useRef } from 'react';

function VideoPlayer2(props) {
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
    data-cld-public-id = "ereul0invtmpipyh8xtm"
    width={width}
    height = {height}
    controls
    {...props}
    />
    );
} ;

export default VideoPlayer2