import React from "react";
import Page from "../../components/Page/Page";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import About from "../../components/About/About";

const Home = () => {
    return (
        <Page>
            <VideoBackground/>
            <About/>
        </Page>
    );
};

export default Home;
