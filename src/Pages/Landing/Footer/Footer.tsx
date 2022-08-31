import React from 'react';
import './footer.css';
import { FaPhone } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const Footer: React.FC = () => {
    return (
        <div id='footer' className="d-flex flex-column align-items-center footer">
            <div className="w-75 row justify-content-around">
                <div className="col-3 p-2">
                    <p className="fs-5">Téléphone</p>
                    <hr/>
                    <p>+261 32 00 000 00</p>
                    <p>+261 33 00 000 01</p>
                    <p>+261 34 00 000 02</p>
                </div>
                <div className="col-3 p-2">
                    <p className="fs-5">Email</p>
                    <hr/>
                    <p>teckdawn@gmail.com</p>
                    <p>recherche.emploi@gmail.com</p>
                </div>
                <div className="col-3 p-2">
                    <p className="fs-5">Addresse</p>
                    <hr/>
                    <p>Bâtiment Ivandry, 101 Antananarivo</p>
                    <p>Madagascar</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
