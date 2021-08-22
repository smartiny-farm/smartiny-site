import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import MainBanner from '../components/HomeDemoTwo/MainBanner';
import FeaturesCard from '../components/HomeDemoTwo/FeaturesCard';
import AboutUsContent from '../components/HomeDemoTwo/AboutUsContent';
import IntroVideo from '../components/Common/IntroVideo';
import Services from '../components/HomeDemoTwo/Services';
import PartnerStyleTwo from '../components/Common/PartnerStyleTwo';
import Footer from '../components/_App/Footer';

const IndexPageTwo = () => {
    return (
        <>
            <NavbarTwo />

            <MainBanner />

            <FeaturesCard />

            <AboutUsContent />

            <IntroVideo />

            <Services />

            <PartnerStyleTwo />

            <Footer />
        </>
    )
}

export default IndexPageTwo;