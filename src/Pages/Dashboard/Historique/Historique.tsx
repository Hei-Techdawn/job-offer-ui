import React from 'react';

const Historique = () => {
    return (
        <div className='w-100 container text-darck h-100 p-3'>
            <div className='d-flex justify-content-center mt-2'>
                <h1>Historiques des candidatures</h1>
            </div>
            <div className='w-100 mt-3'>
                <table className='table'>
                    <thead className='table-darck text-light bg-dark'>
                        <tr>
                            <td>Nom du candidat</td>
                            <td>Poste demandé</td>
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
