import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice'; // Dispatch login action here
import { useNavigate } from 'react-router-dom';
import { register as apiRegister } from '../utils/constants'; // API service for registration
import Button from '../components/Button';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRegister(name, email, password);
      dispatch(
        login({ user: response.user, token: response.token }) // Directly dispatch the login action
      );
      navigate('/profile');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
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
        <Button text="Register" />
      </form>
    </div>
  );
};

export default RegisterPage;
