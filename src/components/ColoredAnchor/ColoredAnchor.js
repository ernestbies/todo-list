import styled from 'styled-components';

const ColoredAnchor = styled.a`
    color: ${(props) => props.color ?? props.theme.colors.primary};
    background-image: ${({theme}) => theme.colors.mainColorGradient};
    background-position: 0 100%; 
    background-size: 0% 1px;
    background-repeat: no-repeat;
    transition: background-size 0.3s, background-position 0s 0.3s, color 0.3s;
        
    &:hover {
        color: #DC143C;
        background-position: 100% 100%;
        background-size: 100% 1px;
    }
`;

export default ColoredAnchor;
