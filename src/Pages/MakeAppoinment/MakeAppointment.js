import React from 'react';
import doctor from '../../assets/images/doctor.png';
import '../InfoCard/InfoCard.css';
import appointment from '../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <section className='mt-28 flex justify-center items-center' style={
            {background:`url(${appointment})`}
        }>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px] '  src={doctor} alt="" srcset="" />
            </div>
            <div className='flex-1 p-12 mx-12 text-white '>
                <h3 className='text-xl text-primary font-bold '>Appointment</h3>
                <h2 className='text-3xl mt-5 py-5'>Make an Appointment Today</h2>
                <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse repellat placeat expedita fuga. Cupiditate, hic! Rerum modi debitis porro voluptates quod culpa. Nobis ipsum fuga dolore omnis numquam in non!.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse repellat placeat expedita fuga. Cupiditate, hic! Rerum modi debitis porro voluptates quod culpa. Nobis ipsum fuga dolore omnis numquam in non!</p>
                <button className='btn btn-primary bg-color text-white uppercase mt-6'>Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;