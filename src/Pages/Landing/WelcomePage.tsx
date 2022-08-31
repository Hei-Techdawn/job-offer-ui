import { FC, RefObject, useEffect } from 'react';
import { useHref, useNavigate } from 'react-router-dom';
import {FaBriefcase} from 'react-icons/fa'

export const WelcomePage: FC = () => {
    return (
        <div className='flex-center lb-size'>
            <div className='w-75 d-flex flex-column'>
                <h1 className='align-self-start left--100 mb-4 display-6'>
                    Vous êtes à la recherche d'un emploi?
                </h1>
                <h2
                    style={{ animationDelay: '1s' }}
                    className='mt-4 mb-4 align-self-end  right--100 display-6'
                >
                    Vous êtes travailleur?
                </h2>
                <h2
                    style={{ animationDelay: '2s' }}
                    className='mt-4 mb-4 right--100  align-self-start display-6'
                >
                    Voici pour vous les offres d'actualités?
                </h2>
                <div
                    style={{ animationDelay: '3s' }}
                    className='scroll-button flex-center mb-4 align-self-center right--100 mt-4 '
                >
                    <a href='#job-list' className='text-dark display-6'>
                        Offres
                    </a>
                </div>
            </div>
        </div>
    );
};
