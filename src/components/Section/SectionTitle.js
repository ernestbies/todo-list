import styled from "styled-components";

const SectionTitle = styled.p`
    font-size: 42px;
    font-family: ${({theme}) => theme.fontPrimary.family};
    font-weight: ${({theme}) => theme.fontPrimary.weight.light};
    color: black;
    letter-spacing: 2px;
    width: 80%;
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        font-size: 30px;
    } 
`;

export default SectionTitle;
