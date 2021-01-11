// Types
import { LoginAuth } from '../../_types/login/index';
import { ReducerActions } from '../../_types/reducers';
import { SET_LOGIN, RESET_TOKEN } from '../../_types/login/action-names';

const initialState: LoginAuth = {
    username: '',
    isLogged: false,
    isToken: ''
};

const setLogin = (state: LoginAuth, payload: LoginAuth) => {
    return {
        ...state,
        username: payload.username,
        isLogged: payload.isLogged
    };
};

export const loginReducer = (state = initialState, actions: ReducerActions<LoginAuth>) => {

    switch (actions.type) {
        case SET_LOGIN:
            return setLogin( state, actions.payload );

        case RESET_TOKEN:
            return {
                ...state,
                isToken: actions.payload.isToken
            };

        default:
            return state;
    }
};