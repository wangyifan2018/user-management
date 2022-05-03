import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <h2>
      Welcome to user management system - <Link to={'user'}>User List</Link>
    </h2>
  );
};
