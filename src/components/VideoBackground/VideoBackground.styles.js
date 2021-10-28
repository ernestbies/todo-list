import styled from 'styled-components';
import Logo from "../Logo/Logo";

export const VideoContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: black;
    margin: 0;
`;

export const VideoBg = styled.video`
    width: 100%;
    filter: brightness(25%);
    background-color: black;
`;

export const VideoSrc = styled.source``;

export const IntroContainer = styled.div`
    width: 50%;
    height: 60%;
    background-color: #00000070;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #FFFFFF50;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const IntroLogo = styled(Logo)`
    transform: scale(2);
`;

export const PageQuote = styled.p`
    color: white;    
    margin: 70px;
    text-transform: uppercase;
    font-family: Roboto;
    letter-spacing: 10px;
    font-size: 18px;
    font-weight: 400;
`;

export const StartButton = styled.button`
    text-transform: uppercase;
    font-family: Roboto;
    padding: 10px 40px 10px 40px;
    letter-spacing: 5px;
    background-color: transparent;
    color: white;
    border: 0;
    border-top: 1px solid #DC143C;
    border-bottom: 1px solid #DC143C;
    cursor: pointer;
    transition: all 1s ease-in-out; 
    background-image: linear-gradient(#DC143C25, #DC143C25);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: all 1s ease-in-out; 
    border-radius: 2px;
    
    &:hover {
        background-size: 100% 100%;
    }
    
    &:hover {
        background-color: #DC143C50;
    }
`;
