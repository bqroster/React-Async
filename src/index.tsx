import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import storeReducers from './store/reducers';

import rootEpics from './store/rootEpics';
const rootEpicMdwr = createEpicMiddleware( rootEpics );

const store = createStore( storeReducers, applyMiddleware( rootEpicMdwr ));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();