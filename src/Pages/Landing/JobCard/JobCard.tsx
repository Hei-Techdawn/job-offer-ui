import { FC, useEffect, useState } from 'react';
import { LittleCard } from '../../../Components/Common/LittleCard/LittleCard';
import './style.css';
import { Offer } from '../../../Provider/data/type';
import httpClient from '../../../Provider/utils/http-client';

export const JobCard: FC = () => {
    const [data, setData] = useState<Offer[]>([]);
    useEffect(() => {
        httpClient.get('offer', { params: { page: 0, sort: "true", size: 3 } }).then((res) => {
            setData(res.data.data);
        });
    }, []);

    return (
        <div className='d-flex flex-column text-dark p-5 justify-content-around' id='job-list'>
            <div className=' mb-5 w-100 card-container d-flex justify-content-around'>
                {data.length !== 0 &&
                    data.map((e) => (
                        <LittleCard
                            className='col-3 mt-2'
                            info={e}
                        />
                    ))}
            </div>
        </div>
    );
};
