import { FC, useContext } from 'react';
import { FaHome, FaBook } from 'react-icons/fa';
import { TMenu } from '../../../Global/types';
import { PrincipalContext } from '../../../Provider/context/contextProvider';
import { MenuItem } from './MenuItem';
import './style.css';

export const SideMenu: FC = () => {
    const {menu} = useContext(PrincipalContext);
    const style={ width: menu?.menuInfo.isOpen ? '15.5rem' : '5.5rem' }

    return (
        <div style={style} className='side-menu text-light'>
            {menu !== undefined && (
                <div className='mt-5 w-100'>
                    <MenuItem icon={<FaHome className='fs-3' />} menuType={TMenu.HOME} />
                    <MenuItem icon={<FaBook className='fs-3' />} menuType={TMenu.BOOKS} />
                </div>
            )}
        </div>
    );
};
