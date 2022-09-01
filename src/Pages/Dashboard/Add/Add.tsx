import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { PrincipalContext } from '../../../Provider/context/contextProvider';
import AddName from './AddName'

const Add = () => {
    const context = useContext(PrincipalContext);
    return (
        <div className='w-100 container text-dark h-100 p-3'>
            <div className='d-flex justify-content-center mt-2'>
                <h1>Creer des nouvelles offres</h1>
            </div>
            <div className='w-100 mt-1'>
                <table className='table'>
                    <thead className='table-dark text-light bg-dark'>
                        <tr>
                            <td>Reference</td>
                            <td>Domaine</td>
                            <td>Poste</td>
                            <td>Lieu</td>
                            <td>Profile</td>
                        </tr>
                    </thead>
                    <tbody className='text-dark'>
                        <tr>
                            <td>REF-001</td>
                            <td>Informatique</td>
                            <td>Developper java</td>
                            <td>Remote</td>
                            <td>Profile 1</td>
                        </tr>
                        <tr>
                            <td>REF-001</td>
                            <td>Informatique</td>
                            <td>Developper java</td>
                            <td>Remote</td>
                            <td>Profile 1</td>
                        </tr>
                        <tr>
                            <td>REF-001</td>
                            <td>Informatique</td>
                            <td>Developper java</td>
                            <td>Remote</td>
                            <td>Profile 1</td>
                        </tr>
                        <tr>
                            <td>REF-001</td>
                            <td>Informatique</td>
                            <td>Developper java</td>
                            <td>Remote</td>
                            <td>Profile 1</td>
                        </tr>
                        <tr>
                            <td>REF-001</td>
                            <td>Informatique</td>
                            <td>Developper java</td>
                            <td>Remote</td>
                            <td>Profile 1</td>
                        </tr>
                    </tbody>
                </table>
                <div className='d-flex mt-5 w-100 justify-content-evenly'>
                    <div>
                        <button
                            className='btn btn-warning'
                            onClick={() => {
                                context.modal(<AddName
                                    label='Ajouter une nouveau offre'
                                    endPoint='offer'
                                    name='Offre'
                                    close={context.closeModal}
                                />, "bg-secondary addName");
                            }}
                        >
                            {' '}
                            <FaPlus /> offre
                        </button>
                    </div>
                    <div>
                        <button
                            className='btn btn-warning'
                            onClick={() => {
                                context.modal(<AddName
                                    label='Ajouter une nouvelle domaine'
                                    endPoint='domain'
                                    name='Domaine'
                                    close={context.closeModal}
                                />, "bg-secondary addName");
                            }}
                        >
                            {' '}
                            <FaPlus /> Domaine
                        </button>
                    </div>
                    <div>
                        <button
                            className='btn btn-warning'
                            onClick={() => {
                                context.modal(<AddName
                                    label='Ajouter une nouvelle poste'
                                    endPoint='position'
                                    name='Poste'
                                    close={context.closeModal}
                                />, 'bg-secondary addName');
                            }}
                        >
                            {' '}
                            <FaPlus /> Poste
                        </button>
                    </div>

                    <div>
                        <button
                            className='btn btn-warning'
                            onClick={() => {
                                context.modal(
                                    <AddName
                                        label='Ajouter un nouveau lieu'
                                        endPoint='place'
                                        name='Lieu'
                                        close={context.closeModal}
                                    />
                                , "bg-secondary addName");
                            }}
                        >
                            {' '}
                            <FaPlus /> Lieu
                        </button>
                    </div>
                    <div>
                        <button
                            className='btn btn-warning'
                            onClick={() => {
                                context.modal(
                                    <AddName
                                        label='Ajouter un nouveau profil'
                                        endPoint='profile'
                                        name='Profil'
                                        close={context.closeModal}
                                    />
                                    , "bg-secondary addName"
                                );
                            }}
                        >
                            {' '}
                            <FaPlus /> Profil
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;
