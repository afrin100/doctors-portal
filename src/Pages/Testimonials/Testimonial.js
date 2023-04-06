import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from '../Review/Review';
const Testimonial = () => {
    const reviews=[
        {
            _id:1,
            name:'Winson Herry',
            review:'',
            img:people1,
            location:'california'
        },
        {
            _id:2,
            name:'Winson Herry',
            review:'',
            img:people2,
            location:'california'
        },
        {
            _id:3,
            name:'Winson Herry',
            review:'',
            img:people3,
            location:'california'
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h2 className="text-xl text-primary font-bold">Testimonials</h2>
                    <h3 className='text-3xl'>What Our Patient Say About Us</h3>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" srcset="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review=><Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;