import { useEffect } from "react";
import "./App.css";
import { NavLink, useLoaderData, Outlet } from "react-router-dom";

function App() {
  const birds = useLoaderData();

  return (
    <div className="min-h-screen dark:bg-slate-800">
      <nav>
        <ul className="sticky w-full dark:bg-slate-900 text-white flex justify-between p-5">
          <li>
            <NavLink to="/">
              <i className="fa-solid fa-feather"></i>
              <span className="ml-3 font-bold">Bird Renamer</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="./signup">Log In / Sign Up</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default App;
