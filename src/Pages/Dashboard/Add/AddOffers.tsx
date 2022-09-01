import { FC, FormEvent, useContext, useEffect, useState } from 'react';
import { Domain, Offer, Place, Position, Profile } from '../../../Provider/data/type';
import httpClient from '../../../Provider/utils/http-client';
import { PrincipalContext } from '../../../Provider/context/contextProvider';
import { ESbType } from '../../../Components/Common/Snackbar/types';

export const auth = {
    username: localStorage.getItem('username') || '',
    password: localStorage.getItem('password') || '',
};

const AddOffers: FC = () => {
    const context = useContext(PrincipalContext);
    const [position, setPosition] = useState<{ data: Position[] }>({ data: [] });
    const [place, setPlace] = useState<{ data: Place[] }>({ data: [] });
    const [domain, setDomain] = useState<{ data: Domain[] }>({ data: [] });
    const [profile, setProfile] = useState<{ data: Profile[] }>({ data: [] });
    const [state, setState] = useState<Offer>({ name: 'none' });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTimeout(()=> {
            context.snackbar('Offre bien créée', ESbType.SUCCESS);
            context.closeModal()
        }, 2000)
        if (state.domain && state.profile && state.place && state.position) {
            httpClient
                .post('offer', state, { auth })
                .then((res) => {
                    if (res.data) {
                        alert("Opérations effectuée !!!")
                        context.snackbar('Offre bien créée', ESbType.MESSAGE);
                        context.closeModal()
                    }
                })
                .catch(() => {
                    context.snackbar('Erreur innatendue', ESbType.ERROR);
                });
        } else {
            context.snackbar('Veuillez bien remplire les champs', ESbType.ERROR);
        }
    };

    useEffect(() => {
        httpClient.get('profile', { auth }).then((res) => {
            setProfile(res.data);
        });
        httpClient.get('position', { auth }).then((res) => {
            setPosition(res.data);
        });
        httpClient.get('place', { auth }).then((res) => {
            setPlace(res.data);
        });
        httpClient.get('domain', { auth }).then((res) => {
            setDomain(res.data);
        });
    }, []);

    return (
        <div className='container pt-2'>
            <h1 className='display-6 fs-3'>Ajouter une offre</h1>
            <hr />
            <form onSubmit={handleSubmit} className='form-group p-2'>
                <div className='input-group m-2'>
                    <button className='btn btn-outline-dark'>Poste</button>
                    <select
                        onChange={(e) =>
                            setState((a) => ({
                                ...a,
                                position: {
                                    id: parseInt(e.target.value),
                                },
                            }))
                        }
                        name='position'
                        id=''
                        className='form-select'
                    >
                        {position.data.map((e) => (
                            <option value={e.id}>{e.name}</option>
                        ))}
                    </select>
                </div>
                <div className='input-group m-2'>
                    <button className='btn btn-outline-dark'>Lieu</button>
                    <select
                        onChange={(e) =>
                            setState((a) => ({
                                ...a,
                                place: {
                                    id: parseInt(e.target.value || '0'),
                                },
                            }))
                        }
                        name='place'
                        id=''
                        className='form-select'
                    >
                        {place.data.map((e) => (
                            <option value={e.id}>{e.name}</option>
                        ))}
                    </select>
                </div>
                <div className='input-group m-2'>
                    <button className='btn btn-outline-dark'>Domaine</button>
                    <select
                        onChange={(e) =>
                            setState((a) => ({
                                ...a,
                                domain: {
                                    id: parseInt(e.target.value || '0'),
                                },
                            }))
                        }
                        name='domain'
                        id=''
                        className='form-select'
                    >
                        {domain.data.map((e) => (
                            <option value={(e.id || 1).toString()}>{e.name}</option>
                        ))}
                    </select>
                </div>
                <div className='input-group m-2'>
                    <button className='btn btn-outline-dark'>Profile</button>
                    <select
                        onChange={(e) =>
                            setState((a) => ({
                                ...a,
                                profile: {
                                    id: parseInt(e.target.value || '0'),
                                },
                            }))
                        }
                        name='profile'
                        id=''
                        className='form-select'
                    >
                        {profile.data.map((e) => (
                            <option value={(e.id || 1).toString()}>{e.name}</option>
                        ))}
                    </select>
                </div>
                <div className='w-100 d-flex align-items-center justify-content-between'>
                    <button type='submit' className='w-25 m-2 btn btn-warning'>
                        Créer
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddOffers;
