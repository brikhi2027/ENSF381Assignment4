import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import reviews from '../data/reviews.js';

const HomeMainSection = () => {
    const navigate = useNavigate();
    const [review, setReview] = useState([]);

    useEffect(() => {
        const getReviews = () => {
            const randomReviews = reviews.sort(() => 0.5 - Math.random());
            const review = randomReviews.slice(0,2);
            return review
        };
        setReview(getReviews());
    }, []);


    function handleButtonClick(){
        navigate("/Productpage")
    }

    return(
        <div>
            <h2>About Us</h2>
            <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. 
                Learn more about our story and commitment to your satisfaction.</p>
            <button onClick = {handleButtonClick}>Shop Now</button>
            <h2>Customer Reviews</h2>
            {review.map(function(review) {
                var ratingStars = []
                for (let i = 0; i < review.stars; i++){
                    ratingStars.push('★');
                }
                return(
                    <div>
                        <p>{review.customerName}</p>
                        <p>{review.reviewContent}</p>
                        <p>Rating: {ratingStars}</p>
                    </div>
                );
            })}

        </div>  
    );
};

export default HomeMainSection;