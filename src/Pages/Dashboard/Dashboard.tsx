import { FC } from "react";
import { SideMenu } from "./SideMenu/SideMenu";
import { TopMenu } from "./TopMenu/TopMenu";
import "./style.css"
import { Loading } from "../../Components/Common/Loading/Loading";

export const Dashboard:FC = () => {
    return (
        <div className='fullscreen bg-dark'>
            <div className='d-flex dashboard'>
                <SideMenu/>
                <div className="dashboard-content flex-center">
                    <Loading/>
                </div>
            </div>
            <TopMenu />
        </div>
    );
}