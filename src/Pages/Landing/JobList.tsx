import { FC, useState } from 'react';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import { LittleCard } from '../../Components/Common/LittleCard/LittleCard';

const mock = new Array(10).fill({
    domain: 'Informatique',
    job: 'Developpeur',
    site: 'full remote',
    profile: 'bacc+3',
});

export const JobList: FC = () => {
    const [container, setContainer] = useState(false);
    const toggleContainer = () => {
        setContainer((e) => !e);
    };
    return (
        <div className='d-flex flex-column text-dark p-5 justify-content-around' id='job-list'>
            <div className='mt-5 w-100 card-container d-flex justify-content-around'>
                <LittleCard
                    className='left--100'
                    info={{
                        domain: 'Informatique',
                        job: 'Developpeur',
                        site: 'full remote',
                        profile: 'bacc+3',
                    }}
                />
                <LittleCard
                    className='left--100'
                    info={{
                        domain: 'Informatique',
                        job: 'Developpeur',
                        site: 'full remote',
                        profile: 'bacc+3',
                    }}
                />
                <LittleCard
                    className='left--100'
                    info={{
                        domain: 'Informatique',
                        job: 'Developpeur',
                        site: 'full remote',
                        profile: 'bacc+3',
                    }}
                />
                <LittleCard
                    className='left--100'
                    info={{
                        domain: 'Informatique',
                        job: 'Developpeur',
                        site: 'full remote',
                        profile: 'bacc+3',
                    }}
                />
            </div>
            <div className='w-100 mt-5 border border-2'>
                <div
                    onClick={toggleContainer}
                    className='cursor-pointer w-100 d-flex justify-content-between align-items-center toggle'
                >
                    <div>
                        <p className='m-2 display-6 fs-4'>
                            {container ? 'Fermer' : 'Voir tout les offres'}
                        </p>
                    </div>
                    <div>{!container ? <BiCaretDown className='m-2' /> : <BiCaretUp />}</div>
                </div>
                <div
                    style={container ? { height: '90vh' } : { height: '0vh' }}
                    className={`all-card-container d-flex ${container && 'pb-5'}`}
                >
                    {mock.map((e, k) => {
                        return (
                            <LittleCard
                                key={k}
                                className='left--100 mt-3 mt-2'
                                info={{
                                    domain: 'Informatique',
                                    job: 'Developpeur',
                                    site: 'full remote',
                                    profile: 'bacc+3',
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
