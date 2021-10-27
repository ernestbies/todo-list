import React from "react";
import {MenuLine, StyledMenu} from "./HamburgerMenu.styles";
import {manageDrawer} from "../../actions/drawerActions";
import {connect} from "react-redux";

const HamburgerMenu = ({manageDrawer}) => {

    return (<StyledMenu title={'Open navigation drawer'} onClick={() => manageDrawer(true)}>
        <MenuLine/>
        <MenuLine/>
        <MenuLine/>
    </StyledMenu>);
};

const mapStateToProps = ({drawerReducer}) => (drawerReducer);
const mapDispatchToProps = {manageDrawer};

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu);

