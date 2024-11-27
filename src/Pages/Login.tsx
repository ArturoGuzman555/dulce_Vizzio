import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Corrección aquí

interface LoginProps {
  onLogin: (userData: any) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Ahora puedes usarlo correctamente

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí se hace la petición para el login
    const response = await fetch(`${import.meta.env.REACT_APP_API_URL}/auth/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data) {
      onLogin(data); // Llama la función onLogin que viene de App.tsx
      navigate('/products');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
