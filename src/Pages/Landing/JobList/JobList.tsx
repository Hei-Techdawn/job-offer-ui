import {FC, useEffect, useState} from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { LittleCard } from '../../../Components/Common/LittleCard/LittleCard';
import "./style.css"
import {Offer} from "../../../Provider/data/type";
import httpClient from "../../../Provider/utils/http-client";

const JobList: FC = () => {
    const [container, setContainer] = useState(true);
    const [data, setData] = useState<Offer[]>([])

    const toggleContainer = () => {
        setContainer((e) => !e);
    };

    useEffect(()=> {
        httpClient.get('offer', {params: {page: 1,sort: true}}).then(res=> {
            setData(res.data.data);
        })
    }, [])

    return (
        <div className='text-dark mb-5'>
            <div className='w-100 multiples-cards'>
                <div
                    onClick={toggleContainer}
                    className='cursor-pointer w-100 d-flex justify-content-between align-items-center toggle'
                >
                    <div>
                        <p className='m-2 display-6 fs-4'>
                            {container ? 'Fermer' : 'Voir toutes les offres'}
                        </p>
                    </div>
                    <div>{!container ? <BiPlus className='m-2' /> : <BiMinus className="m-2" />}</div>
                </div>
                <div
                    style={{
                        height: container ? '90vh' : '0',
                        paddingTop: container ? '2rem' : '0',
                        paddingBottom: container ? '1rem' : '0',
                        overflow: 'hidden'
                }}
                    className='row justify-content-around all-card-container'
                >
                    {data.length !== 0 && data.map((e) => (
                        <LittleCard
                        className='col-3 m-2'
                        info={e}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobList;
