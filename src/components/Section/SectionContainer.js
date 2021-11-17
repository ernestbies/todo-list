import styled from "styled-components";

export const SectionContainer = styled.div`
    margin: 100px;
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    
`;

export default SectionContainer;
