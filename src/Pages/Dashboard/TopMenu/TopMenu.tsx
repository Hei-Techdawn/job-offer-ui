import { FC, useContext } from 'react';
import { FaBars, FaSignOutAlt, FaBriefcase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { PrincipalContext } from '../../../Provider/context/contextProvider';
import './style.css';

export const TopMenu: FC<{ className?: string }> = ({ className }) => {
    const navigate = useNavigate();
    const { menu } = useContext(PrincipalContext);

    const signOut = () => {
        localStorage.clear();
        navigate('/landing');
    };

    const login = () => {
        navigate('/')
    }

    return (
        <div
            className={`
        align-items-center justify-content-between w-100 row top-menu text-light ${className}
        `}
        >
            {menu !== undefined && (
                <>
                    <div onClick={menu.menuFunctions.toggleMenu} className='col-1'>
                        {
                            localStorage.getItem('password') !== null ? 
                        <FaBars className='fs-4 icon' />
                            : <FaBriefcase className='fs-4 icon'/>
                        }
                    </div>
                    <div className='col-2 d-flex justify-content-end'>
                        {localStorage.getItem('password') !== null ? (
                            <FaSignOutAlt onClick={signOut} className='fs-4 icon' />
                        ) : (
                            <button onClick={login} className='border-theme btn btn-outline-dark'>
                                Se Connecter
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};
