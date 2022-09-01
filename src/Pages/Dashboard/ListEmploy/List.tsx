import React, { useEffect, useState } from 'react';
import { Offer } from '../../../Provider/data/type';
import httpClient from '../../../Provider/utils/http-client';
import "./list.css"
const List = () => {
    const [offers, setOffres] = useState<Offer[]>([]);

    useEffect(() => {
        httpClient.get('offer').then((res) => {
            setOffres(res.data.data);
        });
    });

    return (
        <div className='w-100 container text-dark h-100 p-3'>
            <div className='w-100'>
                <div className='d-flex w-50 justify-content-start'>
                    <div className=''>
                        <p>Status de l'offre :</p>
                    </div>
                    <div className='mx-2 '>
                        <select className='form-select' aria-label='Default select example'>
                            <option value='1'>Disponible</option>
                            <option value='2'>Indisponible</option>
                        </select>
                    </div>
                    <button className='btn btn-warning mx-4'>Filtrer</button>
                </div>
            </div>
            <div className='w-100 w-90-overflow mt-1'>
                <table className='table'>
                    <thead className='table-dark text-light bg-dark'>
                        <tr>
                            <th>Référence</th>
                            <th>Domaine</th>
                            <th>Poste</th>
                            <th>Status</th>
                            <th className='w-25'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-dark'>
                        {offers.length !== 0 &&
                            offers.map((e) => (
                                <tr>
                                    <td>{e.ref}</td>
                                    <td>{e.domain?.name}</td>
                                    <td>{e.position?.name}</td>
                                    <td>{e.status !== "valaible" ? "Disponible": "Indisponible"}</td>
                                    <td>
                                        <div className='d-flex'>
                                            <button className='btn bg-dark text-light'>
                                                {e.status !== "valaible" ? "Disponible": "Indisponible"}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
