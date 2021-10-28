import React from "react";
import {AboutInfo, AboutSection, AboutSectionTag, AboutTitle, FaqContainer} from "./About.styles";
import ColoredText from "../ColoredText/ColoredText";
import FaqItem from "../FaqItem/FaqItem";

const About = () => {
    return (<AboutSection>
        <AboutTitle><ColoredText color={'#DC143C'}>{'//'}</ColoredText>{' How it works '}<ColoredText color={'#DC143C'}>{'?'}</ColoredText></AboutTitle>
        <AboutInfo>{'The application allows you to manage the list of to-do tasks in order to better organize your time.'}</AboutInfo>
        <FaqContainer>
            <FaqItem type={'add'}/>
            <FaqItem type={'manage'}/>
            <FaqItem type={'summary'}/>
        </FaqContainer>
        <AboutSectionTag><ColoredText color={'#DC143C'} fontWeight={'bold'}>{'#FAQ //'}</ColoredText>{'toDO - plan your future'}</AboutSectionTag>
    </AboutSection>);
};

export default About;
