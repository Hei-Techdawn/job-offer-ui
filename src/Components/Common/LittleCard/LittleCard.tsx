import { FC, useContext } from 'react';
import { TLCProps } from './type';
import './style.css';
import { PrincipalContext } from '../../../Provider/context/contextProvider';
import Postulates from '../Postulates/Postulates';
import {Offer} from "../../../Provider/data/type";

export const LittleCard: FC<{ info: Offer; className?: string }> = ({ info, className }) => {
    const Bg: string = "#000624";
    const context = useContext(PrincipalContext);
    return (
        <div className={`little-card p-2 text-dark fs-6 ${className}`}>
            <div className='w-100 d-flex p-2 flex-column justify-content-center align-items-center h-50 mt-2 mb-2'>
                <div className='ribbon-container flex-center'>
                    <div className='flex-center text-light ribbon'>{info.domain?.name || ''}</div>
                </div>
                <div className='d-flex w-75 mt-5 justify-content-between'>
                    <span>Poste: </span>
                    <span>{info.position?.name || ''}</span>
                </div>
                <div className='d-flex w-75 justify-content-between'>
                    <span>Profile: </span>
                    <span>{info.profile?.name || ''}</span>
                </div>
                <div className='d-flex w-75 justify-content-between'>
                    <span>Lieu: </span>
                    <span>{info.place?.name || ""}</span>
                </div>
            </div>
            <button
                onClick={() => {
                    context.modal(<Postulates close={context.closeModal} offer={info} />, "bg");
                }}
                className='btn rounded-1 abs-end justify-self-end btn-warning'
            >
                Voir l'annonce
            </button>
        </div>
    );
};
