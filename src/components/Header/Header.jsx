import { NavLink } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <NavLink 
        to="/" 
        end
        className="brand">
          <h1>Yarn Studio</h1>
        </NavLink>

        <nav className="main-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/yarns"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Yarn stash
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
