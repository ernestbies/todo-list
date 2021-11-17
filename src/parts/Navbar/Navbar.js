import React from "react";
import {
    NavLogo, StyledNav, StyledNavLink, StyledNavLinkContainer
} from "./Navbar.styles";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";

const Navbar = () => {
    return (
        <StyledNav>
            <NavLogo href={'https://todo-ernestbies.netlify.app'} title={'toDO - plan your future // ernestbies.com'}/>
            <StyledNavLinkContainer>
                <StyledNavLink to={'/'} title={'home'}>{'home'}</StyledNavLink>
                <StyledNavLink to={'/todo-list'} title={'start'}>{'start'}</StyledNavLink>
                <StyledNavLink to={'/contact'} title={'contact'}>{'contact'}</StyledNavLink>
            </StyledNavLinkContainer>
            <HamburgerMenu/>
        </StyledNav>
    )
};

export default Navbar;
