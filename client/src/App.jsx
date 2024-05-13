import './App.css';
import Header from './Nav.jsx';
import './nav.css';
import Footer from './Footer.jsx';
import './footer.css';

import { Outlet } from 'react-router-dom';
import { ApolloClient, ApoloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApoloProvider client= {client}>
           <div>
            <Nav />
            <Outlet />
            <Footer />
           </div>
        </ApoloProvider>
    )
}

export default App;