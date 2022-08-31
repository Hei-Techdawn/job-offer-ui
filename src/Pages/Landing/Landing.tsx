import { FC, useRef } from 'react';
import { TopMenu } from '../Dashboard/TopMenu/TopMenu';
import { JobList } from './JobList';
import './style.css';
import { WelcomePage } from './WelcomePage';

export const Landing: FC = () => {
    return (
        <div className='fullscreen'>
            <TopMenu className='text-dark landing-top-menu' />
            <div className='landing-body'>
                <WelcomePage/>
                <JobList />
            </div>
        </div>
    );
};
