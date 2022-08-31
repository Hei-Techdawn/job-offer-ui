import { FC, useContext } from 'react';
import { TLCProps } from './type';
import './style.css'
import { PrincipalContext } from '../../../Provider/context/contextProvider';
import Postulates from '../Postulates/Postulates';

export const LittleCard: FC<{ info: TLCProps; className?: string }> = ({ info, className }) => {
    const context = useContext(PrincipalContext)
    return (
        <div className={`little-card p-2 text-dark fs-6 ${className}`}>
            <div className='w-100 d-flex flex-column justify-content-center align-items-center h-50 mt-2 mb-2'>
                <div className="ribbon-container flex-center">
                    <div className="flex-center text-light ribbon">{info.domain}</div>
                </div>
                <div className='d-flex w-75 mt-5 justify-content-between'>
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
            <button
                onClick={() => {context.modal(<Postulates/>)}}
                className='btn rounded-1 abs-end justify-self-end btn-warning'
            >
                Voir l'anonce
            </button>
        </div>
    );
};
