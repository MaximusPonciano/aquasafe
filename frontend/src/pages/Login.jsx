import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Login() {
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
    e.preventDefault()
    const resposta = await api.post('/auth/login',{
        email: email,
        senha: senha
    })
    localStorage.setItem('token', resposta.data.token);
    navigate('/home');
};
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    return(
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input 
          type="email" 
          value={email} // 3. Valor atrelado ao estado
          onChange={(e) => setEmail(e.target.value)} // 4. Atualiza o estado
        />
      </label>
      <label>
        Senha:
        <input
         type="password"
         value={senha}
         onChange={(e) => setSenha(e.target.value)}
         />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );

};


export default Login