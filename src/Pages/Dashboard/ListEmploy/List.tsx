import React from 'react';

const List = () => {
    return (
        <div className='w-100 container border h-75'>
            <div className='w-100 mt-4'>
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
                    <button className='btn btn-primary mx-4'>Filtrer</button>
                </div>
            </div>
            <div className='w-100 mt-3'>
                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <td>Reference</td>
                            <td>Domaine</td>
                            <td>Poste</td>
                            <td className='w-25'>Status</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>REF-001</td>
                            <td>Informatique</td>
                            <td>Developper java</td>
                            <td>Disponible</td>
                            <td>
                                <div className='d-flex'>
                                    <div className='border'>Disponible</div>{' '}
                                    <div className=' mx-3 border bg-dark text-light'>
                                        Indisponible
                                    </div>
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
                                    <div className='border bg-dark text-light'>Disponible</div>{' '}
                                    <div className='mx-3 border'>
                                        Indisponible
                                    </div>
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
                                    <div className='border'>Disponible</div>{' '}
                                    <div className='mx-3 border bg-dark text-light'>
                                        Indisponible
                                    </div>
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
                                    <div className='border bg-dark text-light'>Disponible</div>{' '}
                                    <div className='mx-3 border'>
                                        Indisponible
                                    </div>
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
                                    <div className='border'>Disponible</div>{' '}
                                    <div className='mx-3 border bg-dark text-light'>
                                        Indisponible
                                    </div>
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
