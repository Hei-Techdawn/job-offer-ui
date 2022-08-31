import { FC } from 'react';
import LoginCard from '../../Components/LoginCard/LoginCard';
import './style.css';

export const Login: FC = () => {
    return (
        <div className='z--1 fullscreen bg-dark'>
            <LoginCard className=' simple-card' />
        </div>
    );
};
