import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { useMemo } from "react";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:5000/graphql",
      credentials: "same-origin",
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });
};

const client = createApolloClient();

export function useApollo() {
  return client;
}
