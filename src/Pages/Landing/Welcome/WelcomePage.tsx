// @ts-ignore
import people from '../../../assets/images/people.png';
import { FC } from 'react';
import './style.css'

export const WelcomePage: FC = () => {
    return (
        <div className='flex-center welcome-page text-dark row lb-size'>
            <div className="col-6 d-flex flex-column justify-content-center h-100 p-5">
                    <p style={{animationDelay: "1s"}} className="mx-5 mb-2 left--100 display-6">Vous êtes à la recheche d'un travaille?</p>
                    <p style={{animationDelay: "2s"}} className="mx-5 mt-5 mb-2 right--100 display-6">Vous êtes travailleur ?</p>
                    <p style={{animationDelay: "3s"}} className="mx-5 mt-5 left--100 display-6">Vous êtes sur la bonne page 🙂</p>
            </div>
            <div className="col-6">
                <img src={people} alt="image" className="right--100 home-image"/>
            </div>
        </div>
    );
};
