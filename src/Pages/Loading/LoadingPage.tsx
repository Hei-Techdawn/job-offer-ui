import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../Components/Common/Loading/Loading';
import './style.css';

export const LoadingPage: FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const i = setTimeout(() => {
            navigate('/login');
        }, 2000);
        return () => clearTimeout(i);
    }, [navigate]);

    return (
        <div className='flex-center fullscreen bg-dark '>
            <Loading/>
        </div>
    );
};
