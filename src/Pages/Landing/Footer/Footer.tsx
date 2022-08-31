import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <div className='footer text-dark lb-size d-flex flex-column align-items-center justify-content-center' id='footer'>
            <div>
                <p className='text-uppercase'>
                    Vous etes recruteurs ? Contactez-NOUS pour que nous mettons en avant votre offre
                </p>
            </div>
            
            <div className='d-flex justify-content-center border'>
                <div className=' bloc  d-flex flex-column align-items-start justify-content-center p-lg-5 ' >
                    <div className='blocOne'>
                        <h5>TELEPHONE</h5>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <p>Mobile 1</p>
                            <p>Mobile 2</p>
                            <p className='pFixe'>Fixe</p>
                        </div>
                        <div className=' contactNumber'>
                            <p>+261 33 12 345 67</p>
                            <p>+261 34 12 345 67</p>
                            <p>+261 32 12 345 67</p>
                        </div>
                    </div>
                </div>
                <div className='border bloc d-flex flex-column align-items-start justify-content-center blocTwo'>
                    <div className='title'>
                        <h5>EMAIL</h5>
                    </div>
                    <div>
                        <p>Contact@monsite.com</p>
                        <p>Contact@monsite.com</p>
                    </div>
                </div>
                <div className='border bloc d-flex flex-column align-items-start justify-content-center blocFree'>
                    <div className='title'>
                        <h5>ADRESS</h5>
                    </div>
                    <div className='villebloc'>
                        <p>batiment Ivandry, 101 Antananarivo</p>
                        <p className='Ville'>Madagascar</p>
                    </div>
                </div>
            </div>
            <p>copyright (C)</p>
        </div>
    );
};

export default Footer;
