import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Testimonial from '../Testimonials/Testimonial';



const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;