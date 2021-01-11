// make an object of all the stores
import { combineReducers } from 'redux';

// Types
import { LoginAuth } from '../_types/login';

// Login Store Module
import * as LoginStoreModule from './login';

export interface StoreType {
    login: LoginAuth;
}

const storeReducers = {
    login: LoginStoreModule.loginReducer
};

export default combineReducers( storeReducers );