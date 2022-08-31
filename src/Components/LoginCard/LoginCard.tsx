import { FC, useContext } from 'react';
import { PrincipalContext } from '../../Provider/context/contextProvider';
import { ESbType } from '../Common/Snackbar/types';
import { LoginInput } from './LoginInput';
import { TLoginCardProps } from './types';
import useLogin from './utils';

const LoginCard: FC<TLoginCardProps> = (props) => {
    const tools = useLogin();
    const { className } = props;
    const context = useContext(PrincipalContext);

    return (
        <div className={'abs-center p-3 flex-center ' + className}>
            <form onSubmit={(e) => {e.preventDefault(); context.modal(<p className='display-6'>this is a test</p>)}} className='input-form m-2 text-light'>
                <h1 className='display-6 mb-3'>Login</h1>
                <LoginInput tools={tools} name="username" type='username'/>
                <LoginInput tools={tools} name="password" type='password'/>
                <button type='submit' className='w-100 btn btn-outline-primary mt-4'>
                    Sign In
                </button>
                <p className='w-100 text-center'>or</p>
                <button onClick={()=> context.snackbar("Not implemented", ESbType.ERROR)} type='button' className='w-100 btn btn-outline-primary mb-3'>
                    View details
                </button>
            </form>
        </div>
    );
};


export default LoginCard;
