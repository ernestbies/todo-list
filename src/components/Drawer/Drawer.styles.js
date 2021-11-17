import styled  from 'styled-components';
import {Link} from "react-router-dom";

export const StyledDrawer = styled.div`
    background-color: #111;
    width: 65%;
    height: 100%;
    z-index: 999;
    position: fixed;
    left: -65%;
`;

export const DrawerTop = styled.div`
    height: 70px;
    width: 100%;
    background-image: ${({theme}) => theme.colors.drawerGradient};
    background-size: 10px 10px;
    position: relative;
`;

export const CloseButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-40%,-50%);
    cursor: pointer;
    opacity: 0.5;
    
    &:hover {
        opacity: 1;
    }
    
    &:before, &:after {
        position: absolute;
        left: 14px;
        top: 5px;
        content: ' ';
        height: 20px;
        width: 2px;
        background-color: white;
    }
    
    &:before {
        transform: rotate(45deg);
    }
    
    &:after {
        transform: rotate(-45deg);
    }
`;


export const DrawerContent = styled.div``;

export const DrawerInfo = styled.p`
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    color: white;    
    font-family: ${({theme}) => theme.fontPrimary.family};
    font-size: ${({theme}) => theme.fontPrimary.size.sm};
    white-space: pre-wrap;
    text-align: center;
`;

export const StyledLink = styled(Link)`
    width: 100%;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    
    &:hover {
        background-color: #333;
    }
`;

export const SpecialStyledLink = styled.a`
    width: 100%;
    height: 80px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 20px;
    position: relative;
    
    &:hover {
        background-color: #333;
    }
`;

export const ExternalLinkContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SpecialLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
`;

export const LinkText = styled.p`
    font-family: ${({theme}) => theme.fontPrimary.family};
    font-size: ${({theme}) => theme.fontPrimary.size.lg};
    color: white;
    margin-left: 15px;
`;

export const SpecialLinkText = styled.p`
    font-family: ${({theme}) => theme.fontPrimary.family};
    font-size: ${({theme}) => theme.fontPrimary.size.lg};
    font-weight: ${({theme}) => theme.fontPrimary.weight.bold};
    color: white;
    margin-left: 15px;
    margin-bottom: 5px;
`;

export const SpecialLinkSubtext = styled.p`
    font-family: ${({theme}) => theme.fontPrimary.family};
    font-size: ${({theme}) => theme.fontPrimary.size.sm};
    color: white;
    font-weight: 300;
    margin-top: 0;
    margin-left: 15px;
`;
