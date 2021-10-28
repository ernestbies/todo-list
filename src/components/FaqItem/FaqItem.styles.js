import styled, {keyframes} from 'styled-components';

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
    animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 1.5s forwards;
    animation-delay: 0.4s;
`;

export const FaqText = styled.p`
    color: black;
    font-family: Zen;
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: bold;
`;

export const FaqSubtext = styled.p`
    color: black;
    font-family: Zen;
    font-size: 16px;  
    margin: 0;
`;

