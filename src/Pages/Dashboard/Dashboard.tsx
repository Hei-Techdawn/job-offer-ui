import { FC, useContext } from "react";
import { SideMenu } from "./SideMenu/SideMenu";
import { TopMenu } from "./TopMenu/TopMenu";
import "./style.css"
import { Loading } from "../../Components/Common/Loading/Loading";
import { PrincipalContext } from "../../Provider/context/contextProvider";
import { TMenu } from "../../Global/types";
import List from "./ListEmploy/List";

export const Dashboard:FC = () => {
    const context = useContext(PrincipalContext);
    return (
        <div className='fullscreen'>
            <div className='d-flex dashboard'>
                <SideMenu/>
                <div className="dashboard-content p-2 flex-center">
                    {
                        context.menu?.menuInfo.selected === TMenu.HOME ? <List/> : <Loading/>
                    }
                </div>
            </div>
            <TopMenu />
        </div>
    );
}