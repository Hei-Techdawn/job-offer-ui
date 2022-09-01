import React, { useState } from 'react';
import './postulate.css';
import { Apply, Offer } from '../../../Provider/data/type';
import httpClient from '../../../Provider/utils/http-client';

interface PostulatesProps {
    ref?: any; // type ref
    poste?: any; // poste
    profile?: any; // profile
    lieu?: any; // lieu d'executio
    close?: () => void;
}

const Postulates: React.FC<{ offer: Offer; close: () => void }> = ({ offer, close }) => {
    const [candidate, setCandidate] = useState({
        lastname: '',
        firstname: '',
        email: '',
    });
    const [apply, setApply] = useState({
        candidate,
        salary: '250000',
        offer: { id: offer.id },
        motivationLetter: '',
    });

    return (
        <div className='postulate container text-dark'>
            <h1 className='text-uppercase display-6 mt-2 fs-4'>Postuler à une offre d'emploi</h1>
            <hr />
            <div className='info row justify-content-around'>
                <div className='userInfo col-6'>
                    <p>Information sur vous</p>
                    <div className='d-flex flex-column'>
                        <input
                            onChange={(input) => {
                                setCandidate((e) => ({
                                    ...e,
                                    lastname: input.target.value.split(' ')[0] || '',
                                    firstname: input.target.value.split(' ')[1] || '',
                                }));
                            }}
                            type='text'
                            placeholder='Nom'
                            className='form-control'
                        />
                        <input
                            onChange={(input) => {
                                setCandidate((e) => ({
                                    ...e,
                                    email: input.target.value || '',
                                }));
                            }}
                            type='email'
                            placeholder='Email'
                            className='mt-2 form-control'
                        />
                        <textarea
                            onChange={(textA) => {
                                setApply((e) => ({
                                    ...e,
                                    motivationLetter: textA.target.value || '',
                                }));
                            }}
                            className='mt-2 form-control'
                            placeholder='Apropos de vous'
                            rows={2}
                        ></textarea>
                        <input
                            onChange={(textA) => {
                                let value = '';
                                if (parseInt(textA.target.value) < 250000) {
                                    value = '250000';
                                } else {
                                    value = textA.target.value;
                                }
                                setApply((e) => ({
                                    ...e,
                                    salary: value || '',
                                }));
                            }}
                            value={apply.salary}
                            type='number'
                            className='mt-2 form-control'
                            placeholder='prétention salariale'
                        />
                    </div>
                </div>
                <div className='postInfo col-5'>
                    <div>
                        <p>Information sur {offer.ref}</p>
                    </div>
                    <div className='mx-2'>
                        <p>
                            <strong>poste :</strong> {offer.position?.name}
                        </p>
                        <p>
                            <strong>profil :</strong> {offer.profile?.name}
                        </p>
                        <p>
                            <strong>lieu :</strong> {offer.place?.name}
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-100 d-flex mt-5 justify-content-around'>
                <button onClick={close} className='btn w-25 btn-danger'>
                    Annuler
                </button>
                <button
                    onClick={() => {
                        httpClient.post('apply', apply, {
                            auth: {
                                username: localStorage.getItem('username') || '',
                                password: localStorage.getItem('password') || '',
                            },
                        });
                    }}
                    className='btn w-25 btn-warning'
                >
                    Postuler
                </button>
            </div>
        </div>
    );
};

export default Postulates;
