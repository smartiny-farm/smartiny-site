import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import Footer from '../components/_App/Footer';
import NavbarTwo from "../components/_App/NavbarTwo";

const ContactPage = () => {
    return (
        <>
			<NavbarTwo />
			
			<PageBanner 
                pageTitle="Contato"
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact"
            /> 
			 
            <ContactForm />

            <ContactInfo />

			<Footer />
		</>
    )
}

export default ContactPage;