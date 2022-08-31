import { Dispatch, SetStateAction } from "react";

export type DS<T> = Dispatch<SetStateAction<T>>;

export type urlErrorParams = {
    message: string;
    code: string;
}

export type useMenuReturn<T> = {
    menuInfo: {
        selected: T,
        isOpen: boolean;
    }, menuFunctions: {
        setMenu: (menu: T) => void,
        toggleMenu: () => void;
    };
};

export type useMenuState<T> = {
    isOpen: boolean,
    selected: T;
};


export enum TMenu {
    LIST = "List", HISTORY = "History", ADD = "Add"
}