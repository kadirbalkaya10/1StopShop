//import Nav from './Nav.jsx';
//import Footer from './Footer.jsx';

import { Outlet } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        {/* <Nav /> */}
        <Outlet className="p-5" />
        {/* <Footer /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
