import PropTypes from 'prop-types';
import cn from 'classnames'

import styles from './UiVideo.module.css';
import { useEffect, useRef } from 'react';

const UiVideo = ({
    src,
    Loop = false,
    muted = true,
    autoPaly = false,
    playbackRate = 1.0,
    classes

}) => {
    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.Loop = Loop;
        videoRef.current.muted = muted;
        videoRef.current.autoPaly = autoPaly;
        videoRef.current.playbackRate = playbackRate;
    }, [])
    return (
        <video 
            className={cn(styles.video, classes)}
            ref={videoRef}
        >
            <source src={src}/>
        </video>
    )
}

UiVideo.propTypes = {
    src: PropTypes.string,
    Loop: PropTypes.bool,
    muted: PropTypes.bool,
    autoPaly: PropTypes.bool,
    playbackRate: PropTypes.number,
    classes: PropTypes.string
}

export default UiVideo;