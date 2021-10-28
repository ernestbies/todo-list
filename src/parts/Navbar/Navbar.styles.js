import styled from 'styled-components';
import Logo from "../../components/Logo/Logo";

export const NavLogo = styled(Logo)`
    margin-left: 15%;
    
    @media (max-width: 576px) {
        margin: 0 auto;
    }
`;

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    background-color: black;
    height: 70px;
    position: sticky;
    top: 0;
    border-bottom: 1px solid #111;
    z-index: 5;
`;

export const StyledNavLinkContainer = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style-type: none;
    margin-left: auto; 
    margin-right: 10%;
    
    @media (max-width: 576px) {
        display: none;
    }
`;

export const StyledNavLink = styled.li`
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    font-family: Zen;
    font-weight: 400;
    letter-spacing: 4px;
    font-size: 14px;
    color white;
    cursor: pointer;
    margin-left: 50px; 
    margin-right: 50px;
    padding-bottom: 2px;
    background-image: linear-gradient(#DC143C, #DC143C);
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
