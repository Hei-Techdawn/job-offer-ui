import { FC, useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { LittleCard } from '../../../Components/Common/LittleCard/LittleCard';
import "./style.css"

const JobList: FC = () => {
    const [container, setContainer] = useState(true);
    const toggleContainer = () => {
        setContainer((e) => !e);
    };

    return (
        <div className='text-dark'>
            <div className='w-100 multiples-cards'>
                <div
                    onClick={toggleContainer}
                    className='cursor-pointer w-100 d-flex justify-content-between align-items-center toggle'
                >
                    <div>
                        <p className='m-2 display-6 fs-4'>
                            {container ? 'Fermer' : 'Voir toutes les offres'}
                        </p>
                    </div>
                    <div>{!container ? <BiPlus className='m-2' /> : <BiMinus className="m-2" />}</div>
                </div>
                <div
                    style={{
                        height: container ? '90vh' : '0',
                        paddingTop: container ? '2rem' : '0',
                        paddingBottom: container ? '1rem' : '0',
                        overflow: 'hidden'
                }}
                    className='row justify-content-around all-card-container'
                >
                    {[0, 0, 0].map((e) => (
                        <LittleCard
                            className='col-3 mt-2'
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
        </div>
    );
};

export default JobList;
