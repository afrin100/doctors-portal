import React from 'react';
import chair from '../../assets/images/chair.png'
const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                   <div>
                   <img src={chair}class="max-w-lg rounded-lg shadow-2xl" />
                   </div>
                    <div className='p-4'>
                        <h1 class="text-6xl font-bold">Your new smile start here!</h1>
                        <p class="py-6  ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;