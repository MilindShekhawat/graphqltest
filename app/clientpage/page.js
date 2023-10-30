import React from 'react'
import { ApolloProvider } from "@apollo/client";
import createApollo from "../apollo-client";

export default function page() {
  return (
    <div>page</div>
  )
}
function MyApp({ Component, pageProps }) {
  const client = createApollo;
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
