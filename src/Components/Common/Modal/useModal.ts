import { ReactNode, useState } from 'react';
import { TModalProperties, useModalReturn } from './type';

export const useModal = (): useModalReturn => {
    const [modal, setModal] = useState<TModalProperties>({ status: false, content: null, cN: '' });
    const openModal = (content: ReactNode, cN?: string) => {
        setModal({ status: true, content, cN: cN || '' });
    };

    const closeModal = () => {
        setModal({ status: false, content: null, cN: '' });
    };

    return { openModal, modal: { closeModal, ...modal } };
};
