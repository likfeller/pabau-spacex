import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const spacexClient = new ApolloClient({
  uri: ' https://api.spacex.land/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={ spacexClient } >
      <Component {...pageProps} />
    </ApolloProvider> 
  )
}

export default MyApp
