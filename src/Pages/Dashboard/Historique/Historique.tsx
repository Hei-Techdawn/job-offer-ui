import React, { useEffect, useState } from 'react';
import { Apply, Domain } from '../../../Provider/data/type';
import httpClient from '../../../Provider/utils/http-client';
import { auth } from '../Add/AddOffers';
import './historique.css';

const Historique = () => {
    const [data, setData] = useState<{ data: Apply[] }>({ data: [] });
    const [domain, setDomain] = useState<Domain[]>([]);

    const updateDataWF = () => {
        httpClient.get('apply', { auth }).then((res) => {
            setData({ data: res.data.data });
        });
    }

    useEffect(() => {
        updateDataWF()
        httpClient.get('domain', { auth }).then((res) => {
            setDomain(res.data.data);
        });
    }, []);

    const filterDomain = (id: string) => {
        httpClient.get(`apply/offer/domain/${id}`, { auth }).then((res) => {
            setData(res.data);
        });
    };

    return (
        <div className='w-100 container text-dark h-100 p-3'>
            <div className='d-flex justify-content-center mt-2'>
                <h1>Historiques des candidatures</h1>
            </div>
            <div className='input-group'>
                <button className='btn btn-outline-warning'>Filtres</button>
                <select
                    onChange={(e) => {
                        filterDomain(e.target.value);
                    }}
                    name=''
                    id=''
                    className='select-form'
                >
                    {domain !== undefined &&
                        domain.length !== 0 &&
                        domain.map((e) => <option value={(e.id || 1).toString()}>{e.name}</option>)}
                </select>
                <button onClick={updateDataWF} className='btn btn-outline-warning'>Sans filtre</button>
            </div>
            <div className='table-body w-100 mt-3'>
                <table className='table'>
                    <thead className='table-dark text-light bg-dark'>
                        <tr>
                            <td>Nom du candidat</td>
                            <td>Poste demandé</td>
                            <td>Domaine</td>
                            <td>Lieu</td>
                            <td>Salaire</td>
                            <td>Date du candidature</td>
                        </tr>
                    </thead>
                    <tbody className='text-dark'>
                        {data.data !== undefined &&
                            data.data.length !== 0 &&
                            data.data.map((e) => (
                                <tr>
                                    <td>{e.candidate?.firstName}</td>
                                    <td>{e.offer?.position?.name as string}</td>
                                    <td>{e.offer?.domain?.name as string}</td>
                                    <td>{e.offer?.place?.name as string}</td>
                                    <td>{e.salary}</td>
                                    <td>{e.date}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Historique;
