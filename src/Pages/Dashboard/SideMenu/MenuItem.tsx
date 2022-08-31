import { FC, useContext } from 'react';
import { PrincipalContext } from '../../../Provider/context/contextProvider';
import { TMenuItemsProps } from './types';

export const MenuItem: FC<TMenuItemsProps> = ({ className, icon, menuType }) => {
    const { menu } = useContext(PrincipalContext);
    const cN = `menu-items d-flex w-100  ${className}`;

    return menu !== undefined ? (
        <div
            className={`${cN} ${menu.menuInfo.selected === menuType ? 'active text-darkBlue' : 'text-light'}`}
            onClick={() => menu.menuFunctions.setMenu(menuType)}
        >
            <div className='sm-icon'>{icon}</div>
            <div className='sm-label fs-5'>{menuType}</div>
        </div>
    ) : (
        <div></div>
    );
};
