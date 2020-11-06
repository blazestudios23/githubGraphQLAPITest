import React from 'react';
import Home from "./pages/Home"
import { ApolloClient, InMemoryCache, ApolloProvider,gql  } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: { Authorization: `bearer ${process.env.REACT_APP_GITHUB_API_KEY}` },
  cache: new InMemoryCache()
});


const App = () =>  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>

export default App;
