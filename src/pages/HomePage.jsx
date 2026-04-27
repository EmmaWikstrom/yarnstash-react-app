import { NavLink } from "react-router-dom";

export function HomePage() {
  return (
    <main className="container">
      <h2>Welcome</h2>
      <p>
        Keep track of yarn, stay organized, and get a clear overview of
        available materials.
      </p>
      <p>
        Start by exploring the{" "}
        <NavLink to="/yarns" className="nav-link">
          yarn stash
        </NavLink>
        .
      </p>
    </main>
  );
}
