import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png'
import './Services.css'
const Services = () => {
    return (
        <div>
           <div className='mb-14'>
           <h2 className='text-xl text-center text-primary font-bold uppercase'>Our Services</h2>
            <h2 className='text-3xl text-center '>Services we provide</h2>
           </div>
            {/* card section */}
            <div className='px-12 grid grid-cols-3 gap-5 my-5'>
                <div class="card lg:card-side bg-base-100 shadow-xl  grid grid-cols-1 p-2">
                    <figure>
                        <img src={fluoride} alt="Album" className='w-auto'/>
                    </figure>
                    <div class="card-body ">
                        <h2 class="card-title ">Fluoride treatment</h2>
                        <p>Lotate quisquam rem ipsum dolor sitxt-center amet consectetur adipisicing elit. Cupidi.</p>
                    </div>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl grid grid-cols-1 p-2">
                    <figure><img src={cavity} alt="Album" className='w-auto'/></figure>
                    <div class="card-body">
                        <h2 class="card-title">Cavity filling</h2>
                        <p>Lotate quisquam rem ipsum dolor sitxt-center amet consectetur adipisicing elit. Cupidi</p>
                    </div>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl grid grid-cols-1 p-2">
                    <figure><img src={whitening} alt="Album" className='w-auto'/></figure>
                    <div class="card-body">
                        <h2 class="card-title">Teeth whitening</h2>
                        <p>Lotate quisquam rem ipsum dolor sitxt-center amet consectetur adipisicing elit. Cupidi.</p>
                    </div>
                </div>
            </div>
           {/* Other section */}
            <div class="card lg:card-side bg-base-100  grid grid-cols-2 w-8/12 mx-auto my-10">
                <figure><img src={treatment}alt="Album" className='w-8/12'/></figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl my-2">Exceptional Dental Care,On Your Term</h2>
                    <p className='mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div class="card-actions justify-start mt-2">
                        <button class="btn btn-primary btn-class text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
        


    );
};

export default Services;