import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClientServer } from './config/apolloConfig';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const client = ApolloClientServer('http://localhost:4040/edd');

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
