import React, { FormEvent, useContext, useState } from 'react';
import DataProvider from "../../../Provider/data/data-provider";
import {ESbType} from "../../../Components/Common/Snackbar/types";
import {PrincipalContext} from "../../../Provider/context/contextProvider";

const AddName: React.FC<{ label: string; endPoint: string; name: string; close: () => void }> = ({
    endPoint,
    label,
    name,
    close,
}) => {
    const [state, setState] = useState<string>('');
    const provider = new DataProvider(endPoint);
    const context = useContext(PrincipalContext)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.length > 4) {
            provider
                .addOne([{ name: state }])
                .then((res) => {
                    alert("Ajouté avec success")
                })
                .catch((err) => {
                    context.snackbar(err.message, ESbType.ERROR);
                });
        } else {
            context.snackbar('Veuillez verifier les valeurs saisies', ESbType.ERROR);
        }
    };

    return (
        <div className='container d-flex justify-content-center align-content-center h-100'>
            <form onSubmit={handleSubmit} className='form-group w-50 my-5'>
                <label htmlFor='' className='text-dark'>
                    <h5>{label}</h5>
                </label>
                <input
                    type='text'
                    value={state}
                    onChange={(e) => {
                        setState(e.target.value);
                    }}
                    className='form-control my-4'
                />
                <div className='d-flex justify-content-between'>
                    <button type='submit' className='btn btn-warning'>
                        Ajouter
                    </button>
                    <button onClick={close} type='button' className='btn btn-danger '>
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddName;
