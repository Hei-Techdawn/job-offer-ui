import React from 'react';

const List = () => {
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
            <div className='w-100 mt-1'>
                <table className='table'>
                    <thead className='table-dark text-light bg-dark'>
                        <tr>
                            <td>Reference</td>
                            <td>Domaine</td>
                            <td>Poste</td>
                            <td>Status</td>
                            <td className='w-25'>Actions</td>
                        </tr>
                    </thead>
                    <tbody className='text-dark'>
                        <tr>
                            <td>REF-001</td>
                            <td>Informatique</td>
                            <td>Developper java</td>
                            <td>Disponible</td>
                            <td>
                                <div className='d-flex'>
                                    <button className='btn bg-dark text-light'>Disponible</button>
                                    <button className='btn bg-light text-dark mx-3'>Indisponible</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>REF-001</td>
                            <td>Informatique</td>
                            <td>Developper java</td>
                            <td>Disponible</td>
                            <td>
                                <div className='d-flex'>
                                    <button className='btn bg-dark text-light'>Disponible</button>
                                    <button className='btn bg-light text-dark mx-3'>Indisponible</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>REF-001</td>
                            <td>Informatique</td>
                            <td>Developper java</td>
                            <td>Disponible</td>
                            <td>
                                <div className='d-flex'>
                                    <button className='btn bg-dark text-light'>Disponible</button>
                                    <button className='btn bg-light text-dark mx-3'>Indisponible</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>REF-001</td>
                            <td>Informatique</td>
                            <td>Developper java</td>
                            <td>Disponible</td>
                            <td>
                                <div className='d-flex'>
                                    <button className='btn bg-dark text-light'>Disponible</button>
                                    <button className='btn bg-light text-dark mx-3'>Indisponible</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>REF-001</td>
                            <td>Informatique</td>
                            <td>Developper java</td>
                            <td>Disponible</td>
                            <td>
                                <div className='d-flex'>
                                    <button className='btn bg-dark text-light'>Disponible</button>
                                    <button className='btn bg-light text-dark mx-3'>Indisponible</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
