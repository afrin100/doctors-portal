import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Testimonial from '../Testimonials/Testimonial';
import SubmitForm from '../SubmitForm/SubmitForm';



const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <SubmitForm></SubmitForm>
        </div>
    );
};

export default Home;