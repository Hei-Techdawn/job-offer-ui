import React from 'react';

const AddLieu: React.FC = () => {
    return (
        <div className='container d-flex justify-content-center align-content-center h-100'>
            <div className='form-group w-50 my-5'>
                <label htmlFor='' className='text-light'>
                    <h5>Enter le nouveau lieu de travail</h5>
                </label>
                <input
                    type='text'
                    className='form-control my-4'
                    name=''
                    id=''
                    aria-describedby='helpId'
                    placeholder=''
                />
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-warning'>Ajouter</button>
                    <button className='btn btn-danger '>Annuler</button>
                </div>
            </div>
        </div>
    );
};

export default AddLieu;
