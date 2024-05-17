import { Outlet } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Nav /> */}
      <Nav />
      <Outlet />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
