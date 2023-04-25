import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Testimonial from '../Testimonials/Testimonial';
import SubmitForm from '../SubmitForm/SubmitForm';
import Footer from '../Shared/Footer';



const Home = () => {
    return (
        <div className='max-w-7xl mx-auto px-12'>
           <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <SubmitForm></SubmitForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;