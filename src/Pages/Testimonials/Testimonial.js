import React from 'react';
import quote from '../../assets/icons/quote.svg'
const Testimonial = () => {
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h2 className="text-xl text-primary font-bold">Testimonials</h2>
                    <h3 className='text-3xl'>What Our Patient Say About Us</h3>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" srcset="" />
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default Testimonial;