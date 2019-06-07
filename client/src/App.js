import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Launches } from './components/Launches';
import './App.css';
import './theme/bootstrap-cyborg.min.css';
import logo from './spacex-logo.jpg';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
        
    <div className = "App">    
        <div className="container">
          <ApolloProvider client = {client}> 
            <img src={logo} alt="spacex logo" style={{width: 300, display: 'block', margin: 'auto'}}></img>
            <Launches />
          </ ApolloProvider>
        </div>
    </div>
  );
}


export default App;

