import useForm from "./UseForm";
import React, { useState } from 'react';
import axios from 'axios';

const FORM_ENDPOINT = "https://localhost:7070"; 

const Form = () => {
    const [formData, setFormData] = useState({ message: 'O céu é Azul?' });
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');

const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    console.log ('FormDataMessage: ' + JSON.stringify(formData));
    console.log ('FormDataMessage: ' + formData.message);
    alert(formData.message);
    
    try {
      const response = await axios.post('/prompt', formData); 
      setStatus('success');
      setMessage(`Form submitted successfully
      Response: ${JSON.stringify(response.data)}`);
    } catch (error) {
      setStatus('error');
      setMessage('Error submitting form: ' + error.message);
      console.error(error);
    } 
  };
  const handleChange = (event) => {
    setFormData({ ...formData, message: event.target.value });
    console.log ('FormDataMessage: ' + JSON.stringify(formData));
  };
  if (status === "success") {
    return (
      <>
        <div>Thank you!</div>
        <div>{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div>Something bad happened!</div>
        <div>{message}</div>
      </>
    );
  }
  
  return (
    <form  onSubmit={handleSubmit} method="POST">
      <div className="pt-0 mb-3">
        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" placeholder={formData.message} onChange={handleChange}/>
      </div>
      {status !== "loading" && (
        <div className="pt-0 mb-3">
          <button type="submit">
            Executar
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;