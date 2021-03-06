import React from "react";
import {
    IntroContainer,
    IntroLogo,
    PageQuote,
    StartButton,
    VideoBg,
    VideoContainer,
    VideoSrc
} from "./VideoBackground.styles";
import ColoredText from "../ColoredText/ColoredText";

const VideoBackground = () => {
    return (
        <VideoContainer>
            <VideoBg autoPlay muted loop>
                <VideoSrc src={'/todo.mp4'} type={'video/mp4'}/>
            </VideoBg>
            <IntroContainer>
                <IntroLogo/>
                <PageQuote><ColoredText>{'//'}</ColoredText>{' organize your time'}</PageQuote>
                <StartButton to={'/todo-list'}>{'start'}</StartButton>
            </IntroContainer>
        </VideoContainer>
    );
};

export default VideoBackground;
