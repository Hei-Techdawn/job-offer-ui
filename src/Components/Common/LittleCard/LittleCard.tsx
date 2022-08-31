import { FC } from 'react';
import { TLCProps } from './type';
import './style.css'

export const LittleCard: FC<{ info: TLCProps; className?: string }> = ({ info, className }) => {
    return (
        <div className={`little-card p-2 text-light fs-6 ${className}`}>
            <div className='display-2 fs-5'>{info.domain}</div>
            <hr />
            <div className='w-100 d-flex flex-column justify-content-center align-items-center h-50 mt-2 mb-2'>
                <div className='d-flex w-75 justify-content-between'>
                    <span>Poste:&nbsp;</span>
                    <span>{info.job}</span>
                </div>
                <div className='d-flex w-75 justify-content-between'>
                    <span>Profile:&nbsp;</span>
                    <span>{info.profile}</span>
                </div>
                <div className='d-flex w-75 justify-content-between'>
                    <span>Lieu d'execution: &nbsp;</span>
                    <span>{info.site}</span>
                </div>
            </div>
            <button className='btn rounded-1 abs-end justify-self-end btn-outline-primary'>
                Voir l'anonce
            </button>
        </div>
    );
};
