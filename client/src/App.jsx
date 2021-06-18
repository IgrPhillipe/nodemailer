import { useState } from 'react';
import axios from 'axios';

import './styles.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  const data = {
    name, email, phone, reason, message
  }

  const reasons = ['Orçamento', 'Informações', 'Suporte']

  const sendEmail = async () => {
    try {
      await axios.post('http://localhost:3001/contact', data)
      alert("Email enviado com sucesso");
    } catch (error) {
      alert("Houve um erro. Tente novamente.")
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div className="FormularyCard">
        <div className="Title">
          <h3>Formulário de Contato</h3>
        </div>

        <form className="Form" onSubmit={sendEmail}>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="exemplo@gmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Telefone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="(DDD) 99999-9999"
            minLength="10"
            pattern="[ 0-9\(\)-]{10,16}$"
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Motivo:</label>
          <select required onChange={(e) => setReason(e.target.value)}>
            <option value=''>Escolha um motivo</option>
            {reasons.map((reason, index) => <option key={index}>{reason}</option>)}
          </select>

          <label>Mensagem:</label>
          <textarea
            placeholder="Digite a sua mensagem"
            required
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type='submit'>Enviar</button>

        </form>
      </div>
    </div>
  );
}

export default App;
