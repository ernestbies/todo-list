import React from "react";
import Layout from "../../components/Layout/Layout";
import SectionContainer from "../../components/Section/SectionContainer";
import SectionTitle from "../../components/Section/SectionTitle";
import ColoredText from "../../components/ColoredText/ColoredText";
import SectionText from "../../components/Section/SectionText";
import SectionTag from "../../components/SectionTag/SectionTag";
import {RedirectButton} from "./NotFound.styles";

const NotFound = () => {
    return (
        <Layout title={'404'}>
            <SectionContainer>
                <SectionTitle>
                    <ColoredText>{'// '}</ColoredText>
                    {'Page'}
                    <ColoredText>{' not found'}</ColoredText>
                </SectionTitle>
                <SectionText>{'The page you are looking for does not exist.'}</SectionText>
                <SectionTag animate={true}>
                    <ColoredText fontWeight={'bold'}>{'#404 //'}</ColoredText>
                    {'toDO - plan your future'}
                </SectionTag>
                <RedirectButton to={'/'}>{'Back to the main page'}</RedirectButton>
            </SectionContainer>
        </Layout>
    );
};

export default NotFound;
