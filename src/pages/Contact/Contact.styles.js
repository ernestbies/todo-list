import styled, {keyframes} from 'styled-components';

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

export const EmailContainer = styled.a`
    display: flex;
    align-items: center;
    opacity: 0;
    animation: ${fade} 3s ease forwards;
    animation-delay: 0.8s;
`;

export const EmailAddress = styled.span`
    margin-left: 10px;
    color: ${({theme}) => theme.colors.primary};
    font-size: 28px;
    font-family: ${({theme}) => theme.fontSecondary.family};
    background-image: ${({theme}) => theme.colors.mainColorGradient};
    background-position: 0 100%; 
    background-size: 0% 1px;
    background-repeat: no-repeat;
    transition: background-size 0.3s, background-position 0s 0.3s, color 0.3s;
       
    &:hover {
        color: ${({theme}) => theme.colors.primary};
        background-position: 100% 100%;
        background-size: 100% 1px;
    }
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        font-size: 22px;
    } 
`;
