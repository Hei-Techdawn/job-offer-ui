import React from 'react';
import './postulate.css';

interface PostulatesProps {
    ref?: any; // type ref
    poste?: any; // poste
    profile?: any; // profile
    lieu?: any; // lieu d'execution
}

const Postulates: React.FC<PostulatesProps> = (props) => {
    return (
        <div className='postulate container'>
            <div className='text-center postulateTitle'>
                <h1 className='text-uppercase display-6 fs-4'>Postuler a une offre d'emploie</h1>
            </div>
            <div className='info d-flex'>
                <div className='postInfo'>
                    <div>
                        <p>Information sur #REF001</p>
                    </div>
                    <div className='mx-4'>
                        <p>
                            <span>poste :</span> Developpeur Java
                        </p>
                        <p>
                            <span>profile :</span> Bac+3 en informatique
                        </p>
                        <p>
                            <span>lieu d'execution :</span> Remote
                        </p>
                    </div>
                </div>
                <div className='userInfo'>
                    <p>Information sur vous</p>
                    <div className='form-group'>
                        <div className='d-flex '>
                            <div className=' w-30'>
                                <label>Votre nom :</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    aria-describedby='helpId'
                                    placeholder=''
                                />
                            </div>
                            <div className=' inputMail w-70'>
                                <label>Votre email :</label>
                                <input
                                    type='mail'
                                    className='form-control'
                                    name=''
                                    id=''
                                    aria-describedby='helpId'
                                    placeholder=''
                                />
                            </div>
                        </div>

                        <div className=''>
                            <label>Votre profile :</label>
                            <textarea className='form-control' name='' id='' rows={2}></textarea>
                        </div>
                        <div className='salaire d-flex mt-2'>
                            <div>
                                <p>
                                    Votre pretention salariale : <br /> (en Ariary)
                                </p>
                            </div>
                            <div className='inputSalaire'>
                                <input
                                    type='number'
                                    className='form-control'
                                    name=''
                                    id=''
                                    aria-describedby='helpId'
                                    placeholder=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='validation d-flex justify-content-around'>
                <button className='btn btn-primary'>Annuler</button>
                <button className='btn btn-primary'>Enregistrer</button>
            </div>
        </div>
    );
};

export default Postulates;
