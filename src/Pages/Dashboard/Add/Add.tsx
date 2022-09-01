import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { PrincipalContext } from '../../../Provider/context/contextProvider';
import AddLieu from './AddLieu'
import AddDomaine from './AddDomaine'
import AddProfile from './AddProfile'
import AddPoste from './AddPoste'
import AddOffre from './AddOffre'

const Add = () => {
  const context = useContext(PrincipalContext)
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
                <div className='d-flex w-100 justify-content-evenly'>
                    <div>
                        <button className='btn btn-warning' onClick={() => {context.modal(<AddOffre/>, "bg-secondary")}}>
                            {' '}
                            <FaPlus /> offre
                        </button>
                    </div>
                    <div>
                        <button className='btn btn-warning' onClick={() => {context.modal(<AddDomaine/>, "bg-secondary")}}>
                            {' '}
                            <FaPlus /> Domaine
                        </button>
                    </div>
                    <div>
                        <button className='btn btn-warning' onClick={() => {context.modal(<AddPoste/>, "bg-secondary")}}>
                            {' '}
                            <FaPlus /> Poste
                        </button>
                    </div>

                    <div>
                        <button className='btn btn-warning' onClick={() => {context.modal(<AddLieu/>, "bg-secondary")}}>
                            {' '}
                            <FaPlus /> Lieu
                        </button>
                    </div>
                    <div>
                        <button className='btn btn-warning' onClick={() => {context.modal(<AddProfile/>, "bg-secondary")}}>
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
