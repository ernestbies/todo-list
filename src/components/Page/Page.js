import React from "react";
import PropTypes from 'prop-types';
import {StyledPage} from "./Page.styles";
import Navbar from "../../parts/Navbar/Navbar";
import Footer from "../../parts/Footer/Footer";
import Drawer from "../Drawer/Drawer";

const Page = ({children}) => {
    return (
        <StyledPage>
            <Drawer/>
            <Navbar/>
            {children}
            <Footer/>
        </StyledPage>
    );
};

Page.propTypes = {
    children: PropTypes.node.isRequired
}
export default Page;
