import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h2 className="text-3xl font-semibold">Profile Page</h2>
      {user ? (
        <div>
          <p className="text-lg">Welcome, {user.name}!</p>
          {/* Add more user information here */}
        </div>
      ) : (
        <p className="text-lg">Please login to see your profile.</p>
      )}
    </div>
  );
};

export default ProfilePage;
