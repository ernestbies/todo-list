import React from "react";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import About from "../../components/About/About";
import Layout from "../../components/Layout/Layout";

const Home = () => {
    return (
        <Layout title={'Home'}>
            <VideoBackground/>
            <About/>
        </Layout>
    );
};

export default Home;
