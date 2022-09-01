import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { PrincipalContext } from '../../../Provider/context/contextProvider';
import AddName from './AddName';
import AddOffers from './AddOffers';

const Add = () => {
    const context = useContext(PrincipalContext);
    return (
        <div className='w-100 container text-dark h-100 p-3'>
            <div className='d-flex justify-content-center mt-2'>
                <h1>Créer des nouvelles offres</h1>
            </div>
            <div className='w-100 mt-1'>
                <div className='d-flex mt-5 w-100 justify-content-evenly'>
                    <div>
                        <button
                            className='btn btn-warning'
                            onClick={() => {
                                context.modal(<AddOffers />, 'bg');
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
                                context.modal(
                                    <AddName
                                        label='Ajouter une nouvelle domaine'
                                        endPoint='domain'
                                        name='Domaine'
                                        close={context.closeModal}
                                    />,
                                    'addName'
                                );
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
                                context.modal(
                                    <AddName
                                        label='Ajouter une nouvelle poste'
                                        endPoint='position'
                                        name='Poste'
                                        close={context.closeModal}
                                    />,
                                    'addName'
                                );
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
                                    />,
                                    'addName'
                                );
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
                                    />,
                                    'addName'
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
