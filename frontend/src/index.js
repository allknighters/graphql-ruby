import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from './components/App';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createHttpLink({
    uri: 'http://localhost:3000/graphql'
})

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
})


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'));
