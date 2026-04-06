import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1>Yarn Studio</h1>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink
            to="/yarns"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Yarn stash
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
