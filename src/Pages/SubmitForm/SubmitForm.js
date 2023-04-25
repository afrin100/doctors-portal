import React from 'react';
import appointment from '../../assets/images/appointment.png';
import '../InfoCard/InfoCard.css'
const SubmitForm = () => {
    return (
        <div>
            <div>
                <div class="hero min-h-screen ">
                    <img src={appointment} alt="" className=''/>
                    <div class="hero-content flex-col lg:flex-row-reverse">

                        <div class="card flex-shrink-0 w-full max-w-sm  ">
                            <div class="card-body">
                                <div className='text-center '>
                                    <h2 className='text-primary p-3 font-bold'>Contact us</h2>
                                    <h1 className='text-white text-2xl'>Stay Connected with us</h1>
                                </div>

                                <div class="form-control">
                                    <label class="label w-80">
                                        <span class="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="Email address" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="Subject" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text"></span>
                                    </label>
                                  <textarea name="" id="" cols="30" rows="10" placeholder='Your message' className='p-2 rounded-md'></textarea>
                                </div>
                                <div class="form-control mt-6 w-20 " >
                                    <button class="btn btn-primary font-bold bg-color text-white">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SubmitForm;