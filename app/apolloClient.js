import { ApolloClient, InMemoryCache } from '@apollo/client';

const clientApollo = new ApolloClient({
  uri: 'https://countries.trevorblades.com', // Replace with your API URL
  cache: new InMemoryCache(),
});

export default clientApollo;
