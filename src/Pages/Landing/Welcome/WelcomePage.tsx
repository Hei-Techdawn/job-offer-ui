// @ts-ignore
import people from '../../../assets/images/people.png';
import { FC } from 'react';
import './style.css'

export const WelcomePage: FC = () => {
    return (
        <div className='flex-center text-dark row lb-size'>
            <div className="col-6">
                text
            </div>
            <div className="col-6">
                <img src={people} alt="image" className="right--100 home-image"/>
            </div>
        </div>
    );
};
