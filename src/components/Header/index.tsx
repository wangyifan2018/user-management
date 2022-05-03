import { NavLink } from 'react-router-dom';

const navColor = (isActive: boolean) => {
  return { color: isActive ? 'red' : '' };
};

export const Header = () => {
  return (
    <div>
      <nav>
        <section>
          <h1>User Management System</h1>

          <div className="navContent">
            <div className="navLinks">
              <NavLink to={'/'} style={({ isActive }) => navColor(isActive)}>
                UserList
              </NavLink>
              <NavLink
                to={'create'}
                style={({ isActive }) => navColor(isActive)}
              >
                AddUser
              </NavLink>
              <NavLink to={'help'} style={({ isActive }) => navColor(isActive)}>
                Help
              </NavLink>
            </div>
          </div>
        </section>
      </nav>
      <div className="navLinks"></div>
    </div>
  );
};
