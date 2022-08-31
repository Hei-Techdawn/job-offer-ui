import React from 'react';

const Historique = () => {
    return (
        <div className='w-100 container text-black h-100 p-3'>
            <div className='w-100 mt-1'>
                <table className='table'>
                    <thead className='table-black text-light bg-black'>
                        <tr>
                            <td>Nom du candidat</td>
                            <td>Poste demande</td>
                            <td>Date du candidature</td>
                            <td>Lieu</td>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        <tr>
                            <td>Michel</td>
                            <td>Developper java</td>
                            <td>22-06-2023 </td>
                            <td>Remote</td>
                        </tr>
                        <tr>
                            <td>Michel</td>
                            <td>Developper java</td>
                            <td>22-06-2023 </td>
                            <td>Tana</td>
                        </tr>
                        <tr>
                            <td>Michel</td>
                            <td>Developper java</td>
                            <td>22-06-2023 </td>
                            <td>Antsirabe</td>
                        </tr>
                        <tr>
                            <td>Michel</td>
                            <td>Developper java</td>
                            <td>22-06-2023 </td>
                            <td>Locale</td>
                        </tr>
                        <tr>
                            <td>Michel</td>
                            <td>Developper java</td>
                            <td>22-06-2023 </td>
                            <td>Remote</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Historique;
