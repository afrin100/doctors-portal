import React from 'react';

const Services = () => {
    return (
        <div>
            <h2 className='text-xl text-center text-primary font-bold uppercase'>Our Services</h2>
            <h2 className='text-3xl text-center '>Services we provide</h2>
            {/* card section */}
            <div>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                    </div>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                    </div>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;