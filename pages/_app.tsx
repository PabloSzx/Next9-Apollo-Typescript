import App, { Container } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../src/withApollo";
import { ApolloClient } from "apollo-boost";

class MyApp extends App<{ apollo: ApolloClient<any> }> {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
