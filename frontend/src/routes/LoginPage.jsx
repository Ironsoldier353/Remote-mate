import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { login as apiLogin } from '../utils/constants'; // API service for login

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await apiLogin(email, password);
      dispatch(login({ user: response.user, token: response.token }));
      navigate('/profile');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
        <Button text="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
