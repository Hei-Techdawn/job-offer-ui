import React, { useEffect, useState } from 'react';
import { Offer } from '../../../Provider/data/type';
import httpClient from '../../../Provider/utils/http-client';
import './list.css';
import { usePagination } from '../../../Components/Common/SimplePagination/Utils';
import { SimplePagination } from '../../../Components/Common/SimplePagination/SimplePagination';

const List = () => {
    const [offers, setOffres] = useState<{ lastPage: number; currentPage: number; data: Offer[] }>({
        data: [],
        lastPage: 2,
        currentPage: 1,
    });
    const { page, setPage } = usePagination(offers.currentPage, offers.lastPage);
    useEffect(() => {
        update(page.currentPage);
    });

    const update = (thePage: number) => {
        httpClient.get('offer', {params: {size: 6, page: thePage - 1}}).then((res) => {
            setOffres({
                data: res.data.data,
                lastPage: res.data.lastPage,
                currentPage: res.data.currentPage,
            });
        });
    };

    const newPage = (page: number) => {
        setPage(page);
        update(page)
    }

    return (
        <div className='w-100 container text-dark h-100 p-3'>
            <div className='w-100'>
                <div className='d-flex w-50 justify-content-start'>
                    <div className=''>
                        <p>Status de l'offre :</p>
                    </div>
                    <div className='mx-2 '>
                        <select className='form-select'>
                            <option value='1'>Disponible</option>
                            <option value='2'>Indisponible</option>
                        </select>
                    </div>
                    <button className='btn btn-warning mx-4'>Filtrer</button>
                </div>
            </div>
            <div className='w-100 mt-1'>
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
                        {offers.data.length !== 0 &&
                            offers.data.map((e) => (
                                <tr>
                                    <td>{e.ref}</td>
                                    <td>{e.domain?.name}</td>
                                    <td>{e.position?.name}</td>
                                    <td>
                                        {e.status !== 'valaible' ? 'Disponible' : 'Indisponible'}
                                    </td>
                                    <td>
                                        <div className='d-flex'>
                                            <button className='btn bg-dark text-light'>
                                                {e.status !== 'valaible'
                                                    ? 'Disponible'
                                                    : 'Indisponible'}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className='w-100'>
                    <SimplePagination
                        currentPage={page.currentPage}
                        lastPage={page.lastPage}
                        changePage={newPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default List;
