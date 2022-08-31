import { FC, useContext, useState } from "react";
import { SideMenu } from "./SideMenu/SideMenu";
import { TopMenu } from "./TopMenu/TopMenu";
import "./style.css"
import { Loading } from "../../Components/Common/Loading/Loading";
import { PrincipalContext } from "../../Provider/context/contextProvider";
import { TMenu } from "../../Global/types";
import List from "./ListEmploy/List";
import Historique from './Historique/Historique'
import AddOffre from './Add/Add'

export const Dashboard:FC = () => {
    const context = useContext(PrincipalContext);
    return (
        <div className='fullscreen'>
            <div className='d-flex dashboard'>
                <SideMenu/>
                <div className="dashboard-content p-2 flex-center">
                    {
                        context.menu?.menuInfo.selected === TMenu.LIST ? <List/> :
                        context.menu?.menuInfo.selected === TMenu.HISTORY ? <Historique/> :
                        context.menu?.menuInfo.selected === TMenu.ADD ? <AddOffre/> : <Loading/>
                    }
                </div>
            </div>
            <TopMenu />
        </div>
    );
}