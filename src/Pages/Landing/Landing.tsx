import React, { FC, useRef } from 'react';
import { TopMenu } from '../Dashboard/TopMenu/TopMenu';
import Footer from './Footer/Footer';
import { JobCard } from './JobCard/JobCard';
import './style.css';
import { WelcomePage } from './Welcome/WelcomePage';
import TransitionOne from "./Transition/TransitionOne";
import TransitionTwo from "./Transition/TransitionTwo";
import JobList from "./JobList/JobList";
import TransitionThree from "./Transition/TransitionThree";

export const Landing: FC = () => {
    return (
        <div className='fullscreen'>
            <TopMenu className='text-dark landing-top-menu' />
            <div className='landing-body'>
                <WelcomePage />
                <TransitionOne />
                <JobCard />
                <TransitionTwo />
                <JobList />
                <TransitionThree />
                <Footer />
                <div className='w-100'>
                    <p className='w-100 text-center'>Copyright © 2022.</p>
                </div>
            </div>
        </div>
    );
};
