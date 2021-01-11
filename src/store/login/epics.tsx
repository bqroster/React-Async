// Types
import { LoginAuth } from '../../_types/login/index';
import { ReducerActions } from '../../_types/reducers';
import { REQUEST_LOGIN, SET_LOGIN } from '../../_types/login/action-names';

// Redux-RxJs
import { ActionsObservable } from 'redux-observable';

export const loginEpics = (action$: ActionsObservable<ReducerActions<LoginAuth>>) =>
    action$.ofType(REQUEST_LOGIN)
        .map( (loginCall: ReducerActions<LoginAuth>) => loginCall.payload )
        .delay(1000) // change for a HTTP Request
            .mergeMap( (payload: LoginAuth) => {
                return [
                    {
                        type: SET_LOGIN,
                        payload: payload
                    }
                ];
            });