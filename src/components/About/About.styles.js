import styled, {css, keyframes} from 'styled-components';

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

export const AboutSection = styled.div`
   background-color: white;
   min-height: 570px;   
   width: 100%;
   text-align: center; 
   position: relative;
`;

export const AboutTitle = styled.p`
    color: black;
    margin: 0;
    padding: 50px 0 50px 0;
    font-family: ${({theme}) => theme.fontSecondary.family};
    font-size: ${({theme}) => theme.fontSecondary.size.title};
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        font-size: ${({theme}) => theme.fontSecondary.size.titleSmall};
    }
`;

export const AboutInfo = styled.p`
    color: black;
    font-family: ${({theme}) => theme.fontSecondary.family};
    margin: 0;
    font-size: ${({theme}) => theme.fontSecondary.size.xl};
    opacity: 0;
    animation-delay: 0.5s;
    margin-left: 25px;
    margin-right: 25px;
       
    ${({animate}) => animate && css`
        animation: ${fadeInRight} 2s ease forwards;
    `}
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        font-size: ${({theme}) => theme.fontSecondary.size.lg};
    } 
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
