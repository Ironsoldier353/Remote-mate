import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav>
        <ul className="flex space-x-4 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
