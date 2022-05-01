import { NavLink } from 'react-router-dom';

const navColor = (isActive: boolean) => {
  return { color: isActive ? 'red' : '' };
};

export const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to={'/'} style={({ isActive }) => navColor(isActive)}>
        Home
      </NavLink>
      <NavLink to={'create'} style={({ isActive }) => navColor(isActive)}>
        Create
      </NavLink>
      <NavLink to={'edit'} style={({ isActive }) => navColor(isActive)}>
        Edit
      </NavLink>
      <NavLink to={'help'} style={({ isActive }) => navColor(isActive)}>
        Help
      </NavLink>
    </header>
  );
};
