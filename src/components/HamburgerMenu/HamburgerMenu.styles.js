import styled from 'styled-components';

export const StyledMenu = styled.div`
    display: none;
    width: 50px;
    height: 50px;   
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    
    &:hover {
        background-color: #292727;
    }
    
    @media (max-width: 576px) {
        display: flex;
    }
`;

export const MenuLine = styled.div`
    width: 18px;
    height: 2px;
    background-color: white;   
    border-radius: 5px; 
    margin: 1px;
`;
