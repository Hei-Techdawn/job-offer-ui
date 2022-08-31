import React from 'react';

const Historique = () => {
    return (
        <div className='w-100 container text-darck h-100 p-3'>
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
                    <thead className='table-darck text-light bg-dark'>
                        <tr>
                            <td>Nom du candidat</td>
                            <td>Poste demande</td>
                            <td>Domaine</td>
                            <td>Lieu</td>
                            <td>Date du candidature</td>
                        </tr>
                    </thead>
                    <tbody className='text-dark'>
                        <tr>
                            <td>Michel</td>
                            <td>Developper java</td>
                            <td>Informatique</td>
                            <td>Remote</td>
                            <td>22-06-2023 </td>
                        </tr>
                        <tr>
                            <td>Michel</td>
                            <td>Developper java</td>
                            <td>informatique </td>
                            <td>Tana</td>
                            <td>22-06-2023 </td>
                        </tr>
                        <tr>
                            <td>Michel</td>
                            <td>Developper java</td>
                            <td>Informatique </td>
                            <td>Antsirabe</td>
                            <td>22-06-2023 </td>
                        </tr>
                        <tr>
                            <td>Michel</td>
                            <td>Developper java</td>
                            <td>Informatique</td>
                            <td>Locale</td>
                            <td>22-06-2023 </td>
                        </tr>
                        <tr>
                            <td>Michel</td>
                            <td>Developper java</td>
                            <td>Informatique</td>
                            <td>Remote</td>
                            <td>22-06-2023 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Historique;
