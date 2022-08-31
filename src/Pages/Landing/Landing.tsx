import { FC, useRef } from 'react';
import { TopMenu } from '../Dashboard/TopMenu/TopMenu';
import Footer from './Footer/Footer';
import { JobList } from './JobList';
import './style.css';
import { WelcomePage } from './Welcome/WelcomePage';

export const Landing: FC = () => {
    return (
        <div className='fullscreen'>
            <TopMenu className='text-dark landing-top-menu' />
            <div className='landing-body'>
                <WelcomePage/>
                <JobList />
                <Footer/>
            </div>
        </div>
    );
};
