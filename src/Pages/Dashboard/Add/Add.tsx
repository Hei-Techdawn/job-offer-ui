import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { PrincipalContext } from '../../../Provider/context/contextProvider';
import AddLieu from './AddName';
import AddDomaine from './AddDomaine';
import AddProfile from './AddProfile';
import AddPoste from './AddPoste';
import AddOffre from './AddOffre';
import AddName from './AddName';

const Add = () => {
    const context = useContext(PrincipalContext);
    return (
        <div className='w-100 container text-black h-100 p-3'>
            <div className='w-100 mt-1'>
                <table className='table'>
                    <thead className='table-black text-light bg-black'>
                        <tr>
                            <td>Reference</td>
                            <td>Domaine</td>
                            <td>Poste</td>
                            <td>Lieu</td>
                            <td>Profile</td>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
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
                <div className='d-flex w-100 justify-content-evenly'>
                    <div>
                        <button
                            className='btn btn-warning'
                            onClick={() => {
                                context.modal(<AddOffre />);
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
                                context.modal(<AddDomaine />);
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
                                context.modal(<AddPoste />, 'bg-success');
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
                                context.modal(<AddProfile />);
                            }}
                        >
                            {' '}
                            <FaPlus /> Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;
