import { ReactNode } from 'react';

export type TModalProps = {
    content: ReactNode;
    status: boolean;
    closeModal: () => void;
    cN?: string;
};

export type useModalReturn = {
    openModal: (content: ReactNode) => void;
    modal: TModalProps;
};

export type TModalProperties = {
    content: ReactNode | null;
    status: boolean;
    cN?: string;
};
