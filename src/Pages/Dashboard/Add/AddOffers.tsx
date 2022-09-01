import { FC, useEffect, useState } from 'react';
import useMove from './useMove';
import { Domain, Option, Place, Profile } from '../../../Provider/data/type';
import httpClient from '../../../Provider/utils/http-client';

const AddOffers: FC = () => {
    const profile = useMove<Profile>();
    const [position, setPosition] = useState<{ data: Option[] }>({ data: [] });
    const [place, setPlace] = useState<{ data: Place[] }>({ data: [] });
    const [domain, setDomain] = useState<{ data: Domain[] }>({ data: [] });
    const auth = {
        username: localStorage.getItem('username') || '',
        password: localStorage.getItem('password') || '',
    };
    useEffect(() => {
        httpClient.get('profile', { auth }).then((res) => {
            profile.setInitial(res.data);
        });
        httpClient.get('position', { auth }).then((res) => {
            setPosition(res.data);
        });
        httpClient.get('place', { auth }).then((res) => {
            setPlace(res.data);
        });
        httpClient.get('domain', { auth }).then((res) => {
            setDomain(res.data);
        });
    }, []);

    return (
        <div className='container pt-2'>
            <h1 className="display-6 fs-3">Ajouter une offre</h1>
            <hr/>
            <form className='form-group p-5'>
                <div className="input-group m-2">
                    <button className='btn btn-outline-dark'>Poste</button>
                    <select name="" id="" className="form-select">
                    </select>
                </div>
                <div className="input-group m-2">
                    <button className='btn btn-outline-dark'>Lieu</button>
                    <select name="" id="" className="form-select"></select>
                </div>
                <div className="input-group m-2">
                    <button className='btn btn-outline-dark'>Domaine</button>
                    <select name="" id="" className="form-select"></select>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-between">

                </div>
            </form>
        </div>
    );
};

export default AddOffers;