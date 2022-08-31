import { FC } from 'react';

export const WelcomePage: FC = () => {
    return (
        <div className='flex-center text-light lb-size'>
            <div id='home' className='w-75 d-flex flex-column'>
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
                    className='mt-4 mb-4 right--100 align-self-start display-6'
                >
                    Voici pour vous les offres d'actualités?
                </h2>
                <a
                    style={{ animationDelay: '3s' }}
                    className='scroll-button text-light display-6 flex-center mb-4 align-self-center right--100 mt-4 '
                    href='#job-list'
                >Offres</a>
            </div>
        </div>
    );
};
