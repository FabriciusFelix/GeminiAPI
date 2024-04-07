import logo from './logo.svg';
import React from "react";
import './App.css';
import Form from "./Form";

function App() {
 
  const [valor, setValor] = React.useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Consultor API </h1>
        <p>
           <p>{!valor ? "Faça Sua Pergunta" : valor}</p>
        </p>
        <div className="py-6">
          <Form />  
        </div>
      </header>
    </div>
  );
}

export default App;
