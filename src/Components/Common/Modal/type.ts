import { ReactNode } from "react";

export type TModalProps = {
    content: ReactNode;
    status: boolean;
    closeModal: () => void;
}

export type useModalReturn = {
    openModal: (content: ReactNode) => void;
    modal: TModalProps
}

export type TModalProperty = {
    content: ReactNode | null;
    status: boolean;
}