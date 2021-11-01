import React from "react";
import {AboutInfo, AboutSection, AboutTitle, FaqContainer} from "./About.styles";
import ColoredText from "../ColoredText/ColoredText";
import FaqItem from "../FaqItem/FaqItem";
import {useInView} from "react-intersection-observer";
import SectionTag from "../SectionTag/SectionTag";

const About = () => {

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    return (<AboutSection ref={ref}>
        <AboutTitle><ColoredText>{'//'}</ColoredText>{' How it works '}<ColoredText>{'?'}</ColoredText></AboutTitle>
        <AboutInfo animate={inView}>{'The application allows you to manage the list of to-do tasks in order to better organize your time.'}</AboutInfo>
        <FaqContainer>
            <FaqItem type={'add'} animate={inView}/>
            <FaqItem type={'manage'} animate={inView}/>
            <FaqItem type={'summary'} animate={inView}/>
        </FaqContainer>
        <SectionTag animate={inView}>
            <ColoredText fontWeight={'bold'}>{'#FAQ //'}</ColoredText>
            {'toDO - plan your future'}
        </SectionTag>
    </AboutSection>);
};

export default About;
