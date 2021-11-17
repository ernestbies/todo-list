import styled, {keyframes} from "styled-components";

const fade = keyframes`
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const SectionText = styled.p`
    color: black;
    font-family: ${({theme}) => theme.fontSecondary.family};
    margin: 0;
    font-size: ${({theme}) => theme.fontSecondary.size.xl};
    opacity: 0;
    animation-delay: 0.5s;
    animation: ${fade} 3s ease forwards;
    margin-top: 45px;
    white-space: pre-wrap;
    line-height: 1.7;
    margin-bottom: 50px;
    width: 80%;
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        font-size: ${({theme}) => theme.fontSecondary.size.lg};
    } 
`;

export default SectionText;
