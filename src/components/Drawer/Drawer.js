import React from "react";
import {
    CloseButton,
    DrawerContent,
    DrawerInfo,
    DrawerTop,
    ExternalLinkContainer,
    LinkText,
    SpecialLinkContainer,
    SpecialLinkSubtext,
    SpecialLinkText,
    SpecialStyledLink,
    StyledDrawer,
    StyledLink
} from "./Drawer.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboardList, faEnvelope, faExternalLinkAlt, faHome} from "@fortawesome/free-solid-svg-icons";
import './Drawer.styles.css';
import {connect} from "react-redux";
import {manageDrawer} from "../../actions/drawerActions";

const Drawer = ({drawerIsOpen, manageDrawer}) => {

    return (<StyledDrawer className={drawerIsOpen === true ? 'slider-in' : drawerIsOpen === false ? 'slider-out' : ''}>
        <DrawerTop>
            <CloseButton onClick={() => manageDrawer(false)} title={'Close navigation drawer'}/>
        </DrawerTop>
        <DrawerContent>
            <StyledLink to={'/'} onClick={() => manageDrawer(false)} style={{marginTop: 15}}>
                <FontAwesomeIcon
                    icon={faHome}
                    color={'grey'}
                    style={{width: 25, height: 25, marginLeft: 10}}
                />
                <LinkText>{'Home'}</LinkText>
            </StyledLink>
            <StyledLink to={'/todo-list'} onClick={() => manageDrawer(false)}>
                <FontAwesomeIcon
                    icon={faClipboardList}
                    color={'grey'}
                    style={{width: 25, height: 25, marginLeft: 10}}
                />
                <LinkText>{'Start'}</LinkText>
            </StyledLink>
            <StyledLink to={'/contact'} onClick={() => manageDrawer(false)}>
                <FontAwesomeIcon
                    icon={faEnvelope}
                    color={'grey'}
                    style={{width: 25, height: 25, marginLeft: 10}}
                />
                <LinkText>{'Contact'}</LinkText>
            </StyledLink>
            <SpecialStyledLink href={'https://ernestbies.netlify.app'} target={'_blank'}>
                <SpecialLinkContainer>
                    <SpecialLinkText>{'ERNEST BIEŚ'}</SpecialLinkText>
                    <SpecialLinkSubtext>{'Visit my official website for more projects.'}</SpecialLinkSubtext>
                </SpecialLinkContainer>
                <ExternalLinkContainer>
                    <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        color={'grey'}
                        style={{width: 15, height: 15}}
                    />
                </ExternalLinkContainer>
            </SpecialStyledLink>
        </DrawerContent>
        <DrawerInfo>{'toDD application\nver. 1.0.0.'}</DrawerInfo>
    </StyledDrawer>);
};


const mapStateToProps = ({drawerReducer}) => (drawerReducer);
const mapDispatchToProps = {manageDrawer};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
