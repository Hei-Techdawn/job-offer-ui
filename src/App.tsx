import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Modal } from './Components/Common/Modal/Modal';
import { useModal } from './Components/Common/Modal/useModal';
import { Snackbar } from './Components/Common/Snackbar/Snackbar';
import useSnackbar from './Components/Common/Snackbar/useSnackbar';
import { TMenu } from './Global/types';
import { useMenu } from './Global/useMenu';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { ErrorPage } from './Pages/Error/ErrorPage';
import { Landing } from './Pages/Landing/Landing';
import { LoadingPage } from './Pages/Loading/LoadingPage';
import { Login } from './Pages/Login/Login';
import { PrincipalContext } from './Provider/context/contextProvider';
import { TPrincipalContext } from './Provider/context/types';

export const App: FC = () => {
    const { open, snackState } = useSnackbar();
    const menu = useMenu<TMenu>(TMenu.LIST);
    const {modal, openModal} = useModal();
    const context: TPrincipalContext = { snackbar: open,modal: openModal, closeModal: modal.closeModal, menu };

    return (
        <div className='background fullscreen'>
            {context.menu !== undefined && (
                <PrincipalContext.Provider value={context}>
                    <Routes>
                        <Route path='/' element={<LoadingPage />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/landing' element={<Landing />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Routes>
                </PrincipalContext.Provider>
            )}
            <Snackbar snackState={snackState} className="" />
            <Modal modal={modal} className=""/>
        </div>
    );
};
