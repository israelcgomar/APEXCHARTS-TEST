import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const ApolloClientServer = (url) => {
    const cache = new InMemoryCache();
    const link = new HttpLink({
      uri: url
    });
    
    const client = new ApolloClient({
      cache,
      link
    });
    return client;  
}