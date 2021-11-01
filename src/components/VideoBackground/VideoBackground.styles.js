import styled from 'styled-components';
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";

export const VideoContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: black;
    min-height: 400px;
    margin: 0;
`;

export const VideoBg = styled.video`
    width: 100%;
    filter: brightness(25%);
    min-height: 400px;
    object-fit: cover;
`;

export const VideoSrc = styled.source`
 
`;

export const IntroContainer = styled.div`
    width: 55%;
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
    min-width: 370px;
    min-height: 200px;
    
    ${({ theme }) => theme.mediaBreakpoints.mobile} {
        border-left: 0;
        border-right: 0;
    }
    
`;

export const IntroLogo = styled(Logo)`
    transform: scale(2);
    margin: 0;
    
    ${({ theme }) => theme.mediaBreakpoints.lg} {
        transform: scale(1.5);
    }
    
    ${({ theme }) => theme.mediaBreakpoints.md} {
        transform: scale(1);
    }
    
`;

export const PageQuote = styled.p`
    color: white;    
    margin: 70px;
    text-transform: uppercase;
    letter-spacing: 10px;
    font-family: ${({theme}) => theme.fontPrimary.family};
    font-size: ${({theme}) => theme.fontPrimary.size.xl};
    font-weight: 400;
    text-align: center;
    width: 100%;
    white-space: pre-wrap;
    
    ${({ theme }) => theme.mediaBreakpoints.lg} {
        font-size: ${({theme}) => theme.fontPrimary.size.sm};
        margin: 50px;
    }
    
    ${({ theme }) => theme.mediaBreakpoints.md} {
        margin: 30px;
    }
      
    ${({ theme }) => theme.mediaBreakpoints.mobile} {
        width: auto;
        line-height: 2;
    }
`;

export const StartButton = styled(Link)`
    text-transform: uppercase;
    font-family: ${({theme}) => theme.fontPrimary.family};
    font-size: ${({theme}) => theme.fontPrimary.size.lg};
    padding: 10px 40px 10px 40px;
    letter-spacing: 5px;
    background-color: transparent;
    color: white;
    border: 0;
    border-top: 1px solid #DC143C;
    border-bottom: 1px solid #DC143C;
    cursor: pointer;
    background-image: linear-gradient(#DC143C25, #DC143C25);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: all 1s ease-in-out; 
    border-radius: 2px;
    
    &:hover {
        background-size: 100% 100%;
        background-color: #DC143C50;
    }
    
    ${({ theme }) => theme.mediaBreakpoints.lg} {
        transform: scale(0.9);   
    }
    
    ${({ theme }) => theme.mediaBreakpoints.md} {
        transform: scale(0.8);  
    }
`;
