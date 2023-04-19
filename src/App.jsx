import { useEffect } from "react";
import "./App.css";
import { NavLink, useLoaderData, Outlet } from "react-router-dom";

function App() {
  const birds = useLoaderData();

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0">
        <ul className="w-full dark:bg-zinc-900 bg-teal-700 text-neutral-50 flex justify-between p-5">
          <li>
            <NavLink to="/">
              <i className="fa-solid fa-feather"></i>
              <span className="ml-3 font-bold">Bird Renamer</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="./login">Log In / Sign Up</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
