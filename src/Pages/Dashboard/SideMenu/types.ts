import { ReactNode } from "react";
import { TMenu } from "../../../Global/types";

export type TMenuItemsProps = {
    className?: string;
    menuType: TMenu;
    icon: ReactNode;
}