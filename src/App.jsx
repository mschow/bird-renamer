import { useEffect, useState } from "react";
import "./App.css";
import { NavLink, useLoaderData, Outlet } from "react-router-dom";
import SnackBar from "./components/SnackBar";
import { SnackBarItem, SnackBarTypes } from "./models/SnackBarItem";

function App() {
  const birds = useLoaderData();
  const [snackBarItem, setSnackBarItem] = useState(
    new SnackBarItem("Test Error", SnackBarTypes.SUCCESS)
  );

  return (
    <>
      {snackBarItem && <SnackBar snackBarItem={snackBarItem} />}
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
    </>
  );
}

export default App;
