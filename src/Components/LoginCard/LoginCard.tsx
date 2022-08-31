import { FC, FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authProvider } from '../../Provider/auth/authProvider';
import { authResult } from '../../Provider/auth/type';
import { PrincipalContext } from '../../Provider/context/contextProvider';
import { ESbType } from '../Common/Snackbar/types';
import { LoginInput } from './LoginInput';
import { TLoginCardProps } from './types';
import useLogin from './utils';

const LoginCard: FC<TLoginCardProps> = (props) => {
    const tools = useLogin();
    const { className } = props;
    const context = useContext(PrincipalContext);
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const auth: authResult = await authProvider(
            tools.inputs.username,
            tools.inputs.password
        );
        if(auth === authResult.SUCCESS){
            navigate("/");
        }else {
            context.snackbar("Veuillez vérifier vos identifiants", ESbType.ERROR)
        }
    }

    const landing = () => {
        navigate("/?to=landing")
    }

    return (
        <div className={'abs-center p-3 flex-center text-dark ' + className}>
            <form
                onSubmit={handleSubmit}
                className='input-form m-2 text-dark'
            >
                <h1 className='display-6 text-dark mb-3'>Connexion</h1>
                <LoginInput tools={tools} name='username' type='username' />
                <LoginInput tools={tools} name='password' type='password' />
                <button type='submit' className='w-100 mb-4 btn btn-outline-primary mt-4'>
                    Sign In
                </button>
                <button onClick={landing} type='button' className='w-100 mb-4 btn btn-outline-primary'>
                    Revenir à l'acceuil
                </button>
            </form>
        </div>
    );
};


export default LoginCard;
