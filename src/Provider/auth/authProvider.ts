import httpClient from '../utils/http-client';
import { authResult } from './type';

export const authProvider = (username: string, password: string): Promise<authResult> => {
    return httpClient
        .get('auth', { auth: { username: "admin", password: "12345678" } })
        .then((result) => {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            return authResult.SUCCESS;
        })
        .catch(() => {
            return authResult.FAILED;
        });
};
