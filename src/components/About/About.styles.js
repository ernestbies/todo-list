import styled, {keyframes} from 'styled-components';

const fadeInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-15px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const fadeInRightY = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const AboutSection = styled.div`
   background-color: white;
   min-height: 550px;   
   width: 100%;
   text-align: center; 
   position: relative;
`;

export const AboutTitle = styled.p`
    font-family: Roboto;
    color: black;
    font-family: Zen;
    margin: 0;
    padding: 50px 0 50px 0;
    font-size: 24px;
    opacity: 0;
    animation: ${fadeInRight} ease 2s forwards;
`;

export const AboutInfo = styled.p`
    font-family: Roboto;
    color: black;
    font-family: Zen;
    margin: 0;
    font-size: 18px;
    opacity: 0;
    animation: ${fadeInRight} ease 2s forwards;
    animation-delay: 0.5s;
`;

export const FaqContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;    
    margin-top: 60px;
    margin-bottom: 30px;
    flex-wrap: wrap;
`;

export const AboutSectionTag = styled.div`
    position: absolute;
    left: -200px;
    color: black;    
    width: 450px;
    top: 45%;
    transform: rotate(270deg);
    font-family: Zen;
    margin: 0;
    user-select: none;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    text-align: center;
    opacity: 0;
    animation: ${fadeInRightY} ease 2s forwards;
    
    &:before,
    &:after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #DC143C;
    }

    &:not(:empty)::before {
        margin-right: .25em;
    }

    &:not(:empty)::after {
        margin-left: .25em;
    }
`;

