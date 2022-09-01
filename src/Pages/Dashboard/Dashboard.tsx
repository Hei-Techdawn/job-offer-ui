import {FC, useContext, useEffect, useState} from "react";
import { SideMenu } from "./SideMenu/SideMenu";
import { TopMenu } from "./TopMenu/TopMenu";
import "./style.css"
import { Loading } from "../../Components/Common/Loading/Loading";
import { PrincipalContext } from "../../Provider/context/contextProvider";
import { TMenu } from "../../Global/types";
import List from "./ListEmploy/List";
import Historique from './Historique/Historique'
import AddOffre from './Add/Add'
import {useNavigate} from "react-router-dom";

export const Dashboard:FC = () => {
    const context = useContext(PrincipalContext);
    const navigate = useNavigate();
    useEffect(()=> {
        if(localStorage.getItem("password") === null){
            navigate("/?to=login")
        }
    })
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