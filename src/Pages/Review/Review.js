import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg-w-max-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste voluptates enim provident ducimus sit.</p>
                <div class="flex items-center mt-2">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div>
                        <h2>{review.name}</h2>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;