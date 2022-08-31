import React from 'react';
import './addOffre.css'

const AddOffre: React.FC = () => {
    return (
        <div className='container d-flex justify-content-center align-content-center h-100'>
            <div className='form-group w-50 my-5'>
                <label htmlFor='' className='text-light'>
                    <h5>Enter une nouvelle offre</h5>
                </label>
                <div className='input-group mb-3'>
                    <label className='input-group-text selectWidth' htmlFor='inputGroupSelect01'>
                        Domaine
                    </label>
                    <select className='form-select selectWidth' id='inputGroupSelect01'>
                        <option value='1'>Informatque</option>
                        <option value='2'>Autres</option>
                        <option value='3'>Autres</option>
                    </select>
                </div>
                <div className='input-group mb-3 '>
                    <label className='input-group-text selectWidth' htmlFor='inputGroupSelect01'>
                        Poste
                    </label>
                    <select className='form-select' id='inputGroupSelect01'>
                        <option value='1'>Developpeur</option>
                        <option value='2'>Designer</option>
                        <option value='3'>Autres</option>
                    </select>
                </div>
                <div className='input-group mb-3'>
                    <label className='input-group-text selectWidth' htmlFor='inputGroupSelect01'>
                        Lieu
                    </label>
                    <select className='form-select' id='inputGroupSelect01'>
                        <option value='1'>Local</option>
                        <option value='2'>Antsirabe</option>
                        <option value='3'>Remote</option>
                    </select>
                </div>
                <div className='input-group mb-3'>
                    <label className='input-group-text selectWidth' htmlFor='inputGroupSelect01'>
                        Profile
                    </label>
                    <select className='form-select' id='inputGroupSelect01'>
                        <option value='1'>Profile 1</option>
                        <option value='2'>Profile 2</option>
                        <option value='3'>Profile 3</option>
                    </select>
                </div>

                <div className='d-flex justify-content-between'>
                    <button className='btn btn-warning'>Ajouter</button>
                    <button className='btn btn-danger '>Annuler</button>
                </div>
            </div>
        </div>
    );
};

export default AddOffre;
