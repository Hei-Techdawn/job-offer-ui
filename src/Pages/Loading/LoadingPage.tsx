import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loading } from '../../Components/Common/Loading/Loading';
import './style.css';

export const LoadingPage: FC = () => {
    const navigate = useNavigate();
    const {search} = useLocation();
    const to = new URLSearchParams(search).get("to");
    useEffect(() => {
        const i = setTimeout(() => {
            if (to === 'landing') {
                navigate('/landing');
            } else if (localStorage.getItem('password')) {
                navigate("/dashboard");
            }else {
                navigate('/login ');
            }
        }, 2000);
        return () => clearTimeout(i);
    }, [navigate]);

    return (
        <div className='flex-center fullscreen bg-light '>
            <Loading/>
        </div>
    );
};
