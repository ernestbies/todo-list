import React from "react";
import Layout from "../../components/Layout/Layout";
import {EmailAddress, EmailContainer} from "./Contact.styles";
import ColoredText from "../../components/ColoredText/ColoredText";
import SectionTag from "../../components/SectionTag/SectionTag";
import ColoredAnchor from "../../components/ColoredAnchor/ColoredAnchor";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {theme} from "../../themes/theme";
import SectionContainer from "../../components/Section/SectionContainer";
import SectionTitle from "../../components/Section/SectionTitle";
import SectionText from "../../components/Section/SectionText";

const Contact = () => {
    return (
        <Layout title={'Contact'}>
            <SectionContainer>
                <SectionTitle>
                    <ColoredText>{'// '}</ColoredText>
                    {'Any questions'}
                    <ColoredText>{' ?'}</ColoredText>
                </SectionTitle>
                <SectionText>{'Feel free to contact with me via e-mail. I will respond ASAP.\nAlso visit my '}
                    <ColoredAnchor href={'https://ernestbies.com'}>{'official website'}</ColoredAnchor>
                    {' to check my other projects.'}
                </SectionText>
                <EmailContainer href={'mailto:ernestbies@gmail.com'}>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        color={theme.colors.primary}
                        style={{width: 50, height: 50}}
                    />
                    <EmailAddress>
                        {'ernestbies@gmail.com'}
                    </EmailAddress>
                </EmailContainer>
                <SectionTag animate={true}>
                    <ColoredText fontWeight={'bold'}>{'#CONTACT //'}</ColoredText>
                    {'toDO - plan your future'}
                </SectionTag>
            </SectionContainer>
        </Layout>
    );
};

export default Contact;
