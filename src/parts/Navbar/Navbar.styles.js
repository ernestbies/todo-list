import styled from 'styled-components';

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

export const NavTitle = styled.p`
    color: white;
    font-family: Zen;
    font-weight: 100;
    font-size: 23px;
    text-shadow: 2px 1px #111;
`;

export const NavSubtitle = styled.p`
    color: white;
    font-family: Caveat;
    font-size: 14px;
    margin: 0;
    margin-left: 15px;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 120px;
    user-select: none;
    margin-left: 20%;
    
    @media (max-width: 576px) {
        margin: 0 auto;
    }
`;

export const NavTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
`;

export const NavTitleStyled = styled.span`
    font-weight: 700;
    color: #DC143C;
    text-shadow: 1px 2px #DC143C90;
`;

export const SubtitleStyled = styled.span`
    color: #DC143C;
`;

export const NavBlock = styled.div`
    width: 10px;
    height: 10px;
    background-color: #DC143C;
    margin-right: 15px;
    transform: rotate(45deg);
    box-shadow: 1px 5px #DC143C90, 5px 1px #DC143C90;
    margin-top: 3px;
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
