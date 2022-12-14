import React from "react";
import { createStore } from 'redux';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import initialState from '../initialState';
import reducers from '../reducers';


const store = createStore( reducers, initialState );
const history = createBrowserHistory();

const ProviderMock = props => (
    <Provider store = { store } >
        <Router history={history}>
            {props.children}
        </Router>
    </Provider >
);

export default ProviderMock;