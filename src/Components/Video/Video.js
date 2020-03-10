import React from 'react';
import {Player, BigPlayButton} from 'video-react';
import './Video.scss';

class myVideo extends React.Component {
    render() {
        const {video_preview, video_src} = this.props;
        return (
            <Player
                playsInline
                poster={video_preview}
                src={video_src}
            >
                <BigPlayButton position="center" />
            </Player>
        );
    };
}

export default myVideo;