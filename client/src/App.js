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
        
        <form action="/prompt" method="GET">
          <h1> Consultor API </h1>
          <label>Faça sua pergunta</label>
          <button type="submit">Executar</button>
        </form>
        <p>
           <p>{!valor ? "Loading..." : valor}</p>
        </p>
        <div className="py-6">
          <Form />
        </div>
      </header>
    </div>
  );
}

export default App;
