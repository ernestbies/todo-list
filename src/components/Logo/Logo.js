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

const Logo = ({className}) => {
    return (
        <LogoContainer className={className}>
            <LogoImgContainer>
                <StyledLogo/>
                <LogoTitle>{'to'}<LogoTitleStyled>{'DO'}</LogoTitleStyled></LogoTitle>
            </LogoImgContainer>
            <LogoSubtitle>{'plan your '}<ColoredText color={'#DC143C'}>{'future'}</ColoredText></LogoSubtitle>
        </LogoContainer>
    )
};

export default Logo;
