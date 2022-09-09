import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  // uri: 'https://flyby-gateway.herokuapp.com/',
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})
