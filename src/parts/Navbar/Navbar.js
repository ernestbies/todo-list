import React from "react";
import {
    LogoContainer,
    NavBlock, NavSubtitle,
    NavTitle,
    NavTitleContainer,
    NavTitleStyled,
    StyledNav, StyledNavLink,
    StyledNavLinkContainer, SubtitleStyled
} from "./Navbar.styles";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";

const Navbar = () => {
    return (
        <StyledNav>
            <LogoContainer>
                <NavTitleContainer>
                    <NavBlock/>
                    <NavTitle>{'to'}<NavTitleStyled>{'DO'}</NavTitleStyled></NavTitle>
                </NavTitleContainer>
                <NavSubtitle>{'plan your '}<SubtitleStyled>{'future'}</SubtitleStyled></NavSubtitle>
            </LogoContainer>

            <StyledNavLinkContainer>
                <StyledNavLink>{'Home'}</StyledNavLink>
                <StyledNavLink>{'Contact'}</StyledNavLink>
            </StyledNavLinkContainer>

            <HamburgerMenu/>
        </StyledNav>
    )
};

export default Navbar;
