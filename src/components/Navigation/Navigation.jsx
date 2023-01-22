import { NavLink} from "react-router-dom";
import css from './Navigation.module.css';

let activeClassName = {
  color: 'tomato',
};



const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={css.link}
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      Home
    </NavLink>

   
    <NavLink
      to="/movies"
      className={css.link}
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;

