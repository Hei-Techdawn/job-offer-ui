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

const authLocal = {
    username: localStorage.getItem('username') || '',
    password: localStorage.getItem('password') || '',
}

const Postulates: React.FC<{ offer: Offer; close: () => void }> = ({ offer, close }) => {
    const [candidate, setCandidate] = useState({
        lastName: '',
        firstName: '',
        email: '',
        address: "none"
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
                                    lastName: input.target.value,
                                }));
                            }}
                            type='text'
                            placeholder='Nom'
                            className='form-control mb-2'
                        />
                        <input
                            onChange={(input) => {
                                setCandidate((e) => ({
                                    ...e,
                                    firstName: input.target.value,
                                }));
                            }}
                            type='text'
                            placeholder='Prénom'
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
                <div className='postInfo mt-5 col-5'>
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
                        console.log([candidate])
                        httpClient
                            .post('candidate', [candidate],)
                            .then((res) => {
                                const candidate2 = res.data;
                                console.log(candidate2)
                                setApply((e) => ({ ...e, candidate: candidate2[0] }));
                                httpClient.post('apply', apply).then(() => {
                                    alert('Bien fait');
                                });
                            })
                            .catch((err) => {
                                console.log(err);
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
