import { REQUEST_LOGIN } from '../../_types/login/action-names';
import { LoginAuth } from '../../_types/login';

export const requestUserLogin = (payload: LoginAuth) => {
    return {
        type: REQUEST_LOGIN,
        payload
    };
};