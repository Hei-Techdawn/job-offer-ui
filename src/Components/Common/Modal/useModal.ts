import { ReactNode, useState } from "react";
import { TModalProperty, useModalReturn } from "./type";

export const useModal = (): useModalReturn => {
    const [modal, setModal] = useState<TModalProperty>({status: false, content: null});
    const openModal = (content: ReactNode) => {
        setModal({status: true, content})
    }

    const closeModal = () => {
        setModal({status: false, content: null})
    }

    return {openModal, modal: {closeModal, ...modal}}
}