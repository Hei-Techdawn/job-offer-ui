import React from 'react';
import { VoidExpression } from 'typescript';
import './postulate.css';

interface PostulatesProps {
    ref?: any; // type ref
    poste?: any; // poste
    profile?: any; // profile
    lieu?: any; // lieu d'executio
    close?: () => void;
}

const Postulates: React.FC<PostulatesProps> = ({ close }) => {
    return (
        <div className='postulate container text-dark'>
            <h1 className='text-uppercase display-6 mt-2 fs-4'>Postuler à une offre d'emploi</h1>
            <hr />
            <div className='info row justify-content-around'>
                <div className='userInfo col-6'>
                    <p>Information sur vous</p>
                    <div className='d-flex flex-column'>
                        <input type='text' placeholder='Nom' className='form-control' />
                        <input type='email' placeholder='Email' className='mt-2 form-control' />
                        <textarea
                            className='mt-2 form-control'
                            placeholder='Apropos de vous'
                            rows={2}
                        ></textarea>
                        <input
                            type='number'
                            className='mt-2 form-control'
                            placeholder='prétention salariale'
                        />
                    </div>
                </div>
                <div className='postInfo col-5'>
                    <div>
                        <p>Information sur #REF001</p>
                    </div>
                    <div className='mx-2'>
                        <p>
                            <strong>poste :</strong> Developpeur Java
                        </p>
                        <p>
                            <strong>profil :</strong> Bac+3 en informatique
                        </p>
                        <p>
                            <strong>lieu :</strong> Remote
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-100 d-flex mt-5 justify-content-around'>
                <button onClick={close} className='btn w-25 btn-danger'>
                    Annuler
                </button>
                <button className='btn w-25 btn-warning'>Enregistrer</button>
            </div>
        </div>
    );
};

export default Postulates;
