import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import './InfoCard.css'
const InfoCard = () => {
    return (

        <div className='p-12 grid grid-cols-1 lg:grid-cols-3 gap-5 text-white '>
            <div class="card lg:card-side bg-base-100 shadow-xl bg-color pt-5 px-4">
           
                <figure><img src={clock} alt="Album"  /></figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                  
                </div>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl bg-accent pt-5 px-4">
                    <figure><img src={marker}alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Visit our location</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        
                    </div>
                    </div>
                    <div class="card lg:card-side bg-base-100 shadow-xl bg-color px-5  pt-4">
                        <figure><img src={phone}alt="Album" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Contact us now</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            
                        </div>
                    </div>
                    </div>
                    
                   
                    
                    );
};

                    export default InfoCard;