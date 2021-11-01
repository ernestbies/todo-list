import styled from 'styled-components';

const ColoredText = styled.span`
    color: ${(props) => props.color ?? props.theme.colors.primary};
    font-weight: ${({fontWeight}) => fontWeight ?? 'normal'};
`;

export default ColoredText;
