import { FC, useContext } from "react";
import {FaBars, FaSignOutAlt} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PrincipalContext } from "../../../Provider/context/contextProvider";
import "./style.css"

export const TopMenu:FC = () => {
    const navigate = useNavigate();
    const { menu } = useContext(PrincipalContext);

    const signOut = () => {
        localStorage.clear();
        navigate("/");
    }


    return (
        <div className='align-items-center justify-content-between w-100 row top-menu text-light'>
            {menu !== undefined && (
                <>
                    <div onClick={menu.menuFunctions.toggleMenu} className='col-1'>
                        <FaBars className='fs-4 icon' />
                    </div>
                    <div className='col-1 d-flex justify-content-end'>
                        <FaSignOutAlt onClick={signOut} className='fs-4 icon' />
                    </div>
                </>
            )}
        </div>
    );
}