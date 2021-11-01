import React from "react";
import PropTypes from 'prop-types';
import {StyledPage} from "./Layout.styles";
import Navbar from "../../parts/Navbar/Navbar";
import Footer from "../../parts/Footer/Footer";
import Drawer from "../Drawer/Drawer";
import {GlobalStyles} from "../../themes/GlobalStyles";
import SEO from "../SEO";
import {ThemeProvider} from "styled-components";
import {theme} from "../../themes/theme";

const Layout = ({title, children}) => {
    return (
        <>
            <SEO title={title}/>
            <GlobalStyles/>
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Drawer/>
                    <Navbar/>
                    {children}
                    <Footer/>
                </StyledPage>
            </ThemeProvider>
        </>
    );
};

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
export default Layout;
