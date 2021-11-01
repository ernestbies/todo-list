import styled, {css, keyframes} from 'styled-components';

const growLeft = keyframes`
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
`;

export const StyledItem = styled.div`
    width: 240px;
    height: 200px;
    border-top: 1px solid #DC143C;
    border-bottom: 1px solid #DC143C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: scaleX(0);
    transform-origin: left;
    margin: 40px;
    
    ${({animate}) => animate && css`
        animation-delay: 0.8s;
        animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 1.5s forwards;
    `}
`;

export const FaqText = styled.p`
    color: black;
    font-family: ${({theme}) => theme.fontSecondary.family};
    font-size: ${({theme}) => theme.fontSecondary.size.xl};
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: bold;
     
    ${({ theme }) => theme.mediaBreakpoints.md} {
        font-size: ${({theme}) => theme.fontSecondary.size.lg};
    }
`;

export const FaqSubtext = styled.p`
    color: black;
    font-family: ${({theme}) => theme.fontSecondary.family};
    font-size: ${({theme}) => theme.fontSecondary.size.lg}; 
    margin: 0;
        
    ${({ theme }) => theme.mediaBreakpoints.md} {
        font-size: ${({theme}) => theme.fontSecondary.size.md};
    }
`;

