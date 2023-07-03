import React, { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

import { motion } from 'framer-motion';

import './Testimonials.css';

const Testimonials = () => {
    const [selectedReviewer, setSelectedReviewer] = useState(0);

    const testimonialsLength = testimonialsData.length;

    const prevTestimonial = () => {
        if(selectedReviewer === 0) {
            setSelectedReviewer(testimonialsLength - 1);
        } else {
            setSelectedReviewer(prev => prev - 1)
        }
    };

    const nextTestimonial = () => {
        if(selectedReviewer === testimonialsLength - 1) {
            setSelectedReviewer(0)
        } else {
            setSelectedReviewer(prev => prev + 1)
        }
    };

    // A variable for animation styling purpose
    const transition = { type: 'spring', duration: 3 };

    return (
        <div className='testimonials'>

            <div className='left-testimonials'>
                <h5 className='testimonial-heading'>
                    <span>
                        Testimonials
                    </span>
                    <span className='stroke-text'>
                        What they
                    </span>
                    <span>
                        say about us
                    </span>
                </h5>

                <motion.p 
                    className='testimonial-review'
                    key={selectedReviewer}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >{testimonialsData[selectedReviewer].review}</motion.p>
                <p><span>{testimonialsData[selectedReviewer].name}</span> - {testimonialsData[selectedReviewer].status}</p>

            </div>
            
            <div className='right-testimonials'>

                <motion.div
                    id='stylingPurpose-border'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                />
                <motion.div
                    id='stylingPurpose-card'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                />

                <motion.img 
                    src={testimonialsData[selectedReviewer].image} 
                    alt="the reviewer" 
                    className='reviewer'
                    key={selectedReviewer}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                />

                <div className='arrows'>
                    <img src={leftArrow} alt="left arrow" onClick={prevTestimonial} />
                    <img src={rightArrow} alt="right arrow" onClick={nextTestimonial} />
                </div>

            </div>
        </div>
    );
};

export default Testimonials;