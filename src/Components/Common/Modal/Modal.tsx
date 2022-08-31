import { FC, useEffect, useState } from 'react';
import { TModalProps } from './type';
import { BiXCircle } from 'react-icons/bi';
import './style.css';

export const Modal: FC<{ modal: TModalProps; className?: string }> = ({ modal, className }) => {
    const { content, closeModal, status } = modal;
    const [style, setStyle] = useState({ modal: {}, bg: {} });

    const openModal = () => {
        setStyle({ modal: { top: '15%' }, bg: { bottom: '0' } });
    };

    const close = () => {
        setStyle({ modal: { top: '-100%' }, bg: { bottom: '-100%' } });
    };

    useEffect(() => {
        if (status) {
            openModal();
        } else {
            close();
        }
    }, [status]);

    return (
        <>
            <div style={style.bg} className='modal-bg'></div>
            <div style={style.modal} className={`empty-modal ${className}`}>
                <BiXCircle onClick={closeModal} className='modal-close' />
                {content}
            </div>
        </>
    );
};
