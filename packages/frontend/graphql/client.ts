import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:8081/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      ["user-id"]: window.location.pathname?.split('/')?.slice(-1)[0]
    }
  }
});

const client = new ApolloClient({
    uri: "http://localhost:8081/graphql",
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
});

export default client;