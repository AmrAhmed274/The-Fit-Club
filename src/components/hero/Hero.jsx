import React from 'react';
import Header from '../header/Header';
import './Hero.css';
import HeroImage from '../../assets/hero_image.png';
import HeroImageBack from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-hero">

                <Header />

                <div className='the-best-ad'>
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>

                <div className='hero-text'>
                    <span><span className='stroke-text'>Shape</span> your </span>
                    <span>ideal body</span>
                    <span className='hero-text-description'>In here we will help you to shape and build your ideal body and live up your life to<br /> fullest</span>
                </div>

                <div className='figures'>
                    <div className='figure-item'>
                        <span className='figure-item-statistic'>+140</span>
                        <span className='figure-item-title'>Expert coachs</span>
                    </div>
                    <div className='figure-item'>
                        <span className='figure-item-statistic'>+978</span>
                        <span className='figure-item-title'>Members joined</span>
                    </div>
                    <div className='figure-item'>
                        <span className='figure-item-statistic'>+50</span>
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

                <div className="heart-rate">
                    <img src={Heart} className='heart-rate-img' alt="heart" />
                    <span className='heart-rate-heading'>Heart Rate</span>
                    <span className='heart-rate-number'>116 bpm</span>
                </div>

                <img src={HeroImage} alt="A fitness man" className='hero-image' />
                <img src={HeroImageBack} alt="it's for styling" className='hero-image-back' />

                <div className='calories'>
                    <img src={Calories} alt="calories" className='calories-img'/>
                    <div className='calories-text'>
                        <span className='calories-text-heading'>Calories Burned</span>
                        <span className='calories-text-number'>220 kcal</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;