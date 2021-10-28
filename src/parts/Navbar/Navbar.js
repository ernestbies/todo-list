import React from "react";
import {
    NavLogo, StyledNav, StyledNavLink, StyledNavLinkContainer
} from "./Navbar.styles";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";

const Navbar = () => {
    return (
        <StyledNav>
            <NavLogo/>
            <StyledNavLinkContainer>
                <StyledNavLink>{'home'}</StyledNavLink>
                <StyledNavLink>{'start'}</StyledNavLink>
                <StyledNavLink>{'contact'}</StyledNavLink>
            </StyledNavLinkContainer>
            <HamburgerMenu/>
        </StyledNav>
    )
};

export default Navbar;
