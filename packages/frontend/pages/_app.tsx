import { AppProps } from "next/app";
import "../styles/reset.css";
import "../styles/global.css";
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
