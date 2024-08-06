import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './globals.css'

function App() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    const response = await fetch('http://localhost:3001/api/routers/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
    const log = await response.json();
    console.log(log);

    if (response.status === 200) {
      alert('Registered');
      navigate('/login');
    } else {
      alert('Error');
    };
  }

  return (
    <div className="main">
      <h1>Register</h1>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          className="input"
          placeholder='Username'
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          className='input'
          placeholder='Password'
        />
        <button onClick={() => register()}>Register</button>
      <Link to="/login" className="link">Login</Link>
    </div>
  );
}

export default App;