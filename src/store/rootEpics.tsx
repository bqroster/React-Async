import { combineEpics } from 'redux-observable';

// Epics
import { loginEpics } from './login/epics';

export default combineEpics(
    loginEpics
);