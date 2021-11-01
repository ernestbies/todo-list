import styled from 'styled-components';

export const ToDoTitle = styled.p`
    font-family: ${({theme}) => theme.fontSecondary.family};
    font-size: ${({theme}) => theme.fontSecondary.size.title};
    font-weight: ${({theme}) => theme.fontSecondary.weight.regular};
    letter-spacing: 1px;
    margin-top: 50px;
`;

export const ToDoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`;
