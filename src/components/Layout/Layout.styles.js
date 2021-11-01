import styled from 'styled-components';

export const StyledPage = styled.div`
    background: ${({theme}) => theme.colors.mainGradient};
    min-height: 100vh;
    width: 100%;
    position: absolute;
    margin: 0 auto;
`;
