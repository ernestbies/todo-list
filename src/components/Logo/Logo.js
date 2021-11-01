import React from "react";
import {
    LogoContainer,
    LogoImgContainer,
    LogoSubtitle,
    LogoTitle,
    LogoTitleStyled,
    StyledLogo,
} from "./Logo.styles";
import ColoredText from "../ColoredText/ColoredText";

const Logo = ({href, title, className}) => {
    return (
        <LogoContainer href={href} as={href ? 'a' : 'div'} title={title} className={className}>
            <LogoImgContainer>
                <StyledLogo/>
                <LogoTitle>{'to'}<LogoTitleStyled>{'DO'}</LogoTitleStyled></LogoTitle>
            </LogoImgContainer>
            <LogoSubtitle>{'plan your '}<ColoredText>{'future'}</ColoredText></LogoSubtitle>
        </LogoContainer>
    )
};

export default Logo;
