import styled from 'styled-components';

const ColoredText = styled.span`
    color: ${({color}) => color};
    font-weight: ${({fontWeight}) => fontWeight ?? 'normal'};
`;

export default ColoredText;
