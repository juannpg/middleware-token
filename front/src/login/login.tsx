import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../globals.css'

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Login = async () => {
    const response = await fetch('http://localhost:3001/api/routers/users/login', {
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
      localStorage.setItem('token', log.token);

      alert('Logged in successfully');
      navigate('/test');
    } else {
      alert('Error, ' + log.message);
    };
  }

  return (
    <div className="main">
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="username"
        className='input'
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
      <button onClick={() => Login()}>Login</button>
      <Link to="/" className='link'>Register</Link>
    </div>
  );
}

export default Login;