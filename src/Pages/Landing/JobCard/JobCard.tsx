import { FC, useState } from 'react';
import { LittleCard } from '../../../Components/Common/LittleCard/LittleCard';
import './style.css'



export const JobCard: FC = () => {
    return (
        <div className='d-flex flex-column text-dark p-5 justify-content-around' id='job-list'>
            <div className=' mb-5 w-100 card-container d-flex justify-content-around'>
                {[0,0,0].map((e) => (
                    <LittleCard
                        className='left--100'
                        info={{
                            domain: 'Informatique',
                            job: 'Developpeur',
                            site: 'full remote',
                            profile: 'bacc+3',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
