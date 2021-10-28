import styled from 'styled-components';

export const StyledFooter = styled.div`
    min-height: 40px;
    width: 100%;
    background-color: black;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

export const FooterText = styled.p`
    font-family: Roboto;
    font-size: 11px;
    color: white;
    text-align: center;
    margin: 0;
    font-weight: 300;
`;
