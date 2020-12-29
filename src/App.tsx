import React from 'react';
import Grpc from 'grpc';
import GrpcWeb from 'grpc-web';
import logo from './logo.svg';
import './App.css';
import './styles/css/scss-styles.css';
import UserService from '../proto/user_pb'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;