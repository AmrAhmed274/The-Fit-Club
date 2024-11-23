import React from 'react';
import Header from '../header/Header';
import './Hero.css';
import HeroImage from '../../assets/hero_image.png';
import HeroImageBack from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';

import { motion } from 'framer-motion';

const Hero = () => {
    // Variables for animation styling purpose
    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero">
            <div className='blur hero-blur' />
            <div className="left-hero">
                <Header />

                <div className='the-best-ad'>
                    <motion.div 
                        initial={{left: mobile ? '165px' : '238px'}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: 'tween'}}
                    />
                    <span>the best fitness club in the town</span>
                </div>

                <div className='hero-text'>
                    <span><span className='stroke-text'>Shape</span> your </span>
                    <span>ideal body</span>
                    <span className='hero-text-description'>In here we will help you to shape and build your ideal body and live up your life to<br /> fullest</span>
                </div>

                <div className='figures'>
                    <div className='figure-item'>
                        <span className='figure-item-statistic'>
                            <NumberCounter end={140} start={100} delay='4' preFix='+'/>
                        </span>
                        <span className='figure-item-title'>Expert coachs</span>
                    </div>
                    <div className='figure-item'>
                        <span className='figure-item-statistic'>
                            <NumberCounter end={978} start={800} delay='4' preFix='+'/>
                        </span>
                        <span className='figure-item-title'>Members joined</span>
                    </div>
                    <div className='figure-item'>
                        <span className='figure-item-statistic'>
                            <NumberCounter end={50} start={0} delay='4' preFix='+'/>
                        </span>
                        <span className='figure-item-title'>Fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className="btn btn-getStarted">Get Started</button>
                    <button className="btn btn-learnMore">Learn more</button>
                </div>

            </div>
            <div className="right-hero">
                <button className='btn btn-joinNow'>Join Now</button>

                <motion.div 
                    className="heart-rate"
                    initial={{right: '-1rem'}}
                    whileInView={{right: '4rem'}}
                    transition={transition}
                >
                    <img src={Heart} className='heart-rate-img' alt="heart" />
                    <span className='heart-rate-heading'>Heart Rate</span>
                    <span className='heart-rate-number'>116 bpm</span>
                </motion.div>

                <img src={HeroImage} alt="A fitness man" className='hero-image' />
                <motion.img 
                    src={HeroImageBack} 
                    alt="it's for styling" 
                    className='hero-image-back'
                    initial={{right: '11rem'}}
                    whileInView={{right: '20rem'}}
                    transition={transition}
                />

                <motion.div 
                    className='calories'
                    initial={{right: '37rem'}}
                    whileInView={{right: '28rem'}}
                    transition={transition}
                >
                    <img src={Calories} alt="calories" className='calories-img'/>
                    <div className='calories-text'>
                        <span className='calories-text-heading'>Calories Burned</span>
                        <span className='calories-text-number'>220 kcal</span>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;