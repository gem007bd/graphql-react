import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Launches } from './components/Launches';
import { Launch } from './components/Launch';
import './App.css';
import './theme/bootstrap-cyborg.min.css';
import logo from './spacex-logo.jpg';

const client = new ApolloClient({
  //uri: 'http://localhost:5000/graphql'
  // change for dyploy
  uri: '/graphql'
})

function App() {
  return (
    <div className = "App">    
        <BrowserRouter>
        <div className="container">
          <ApolloProvider client = {client}> 
            <img src={logo} alt="spacex logo" style={{width: 300, display: 'block', margin: 'auto'}}></img>
            <Route exact path='/' component={Launches} />
            <Route exact path = '/launch/:flight_number' component = {Launch} />
          </ ApolloProvider> 
        </div>
        </BrowserRouter>
    </div>
  );
}


export default App;

