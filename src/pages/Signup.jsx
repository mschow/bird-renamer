import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { Form } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="mt-10 w-full md:w-1/2 ">
        <div className="w-full text-center ">
          <span className="text-3xl font-bold">Create an Account</span>
        </div>
        <div className="p-5 rounded-lg drop-shadow-sm">
          <div className="w-full">
            <Form method="post">
              <ul className="w-full p-5 grid grid-cols-1 gap-2">
                <li>
                  <label htmlFor="username" className="block">
                    <span>
                      <i className="fa fa-user"></i>Username
                    </span>
                    <input type="text" name="username" />
                  </label>
                </li>
                <li>
                  <label htmlFor="email" className="block">
                    <span>
                      <i className="fa fa-envelope"></i>Email
                    </span>
                    <input type="email" name="email" />
                  </label>
                </li>
                <li>
                  <label htmlFor="password">
                    <span>
                      <i className="fa fa-lock"></i>Password
                    </span>
                    <input type="password" name="password" />
                  </label>
                </li>

                <li>
                  <label htmlFor="repeat-password">
                    <span>
                      <i className="fa fa-lock"></i>Repeat Password
                    </span>
                    <input type="password" name="repeat-password" />
                  </label>
                </li>
                <li>
                  <button type="submit" className="w-full bg-teal-600 mt-5">
                    Sign Up
                  </button>
                </li>
              </ul>
            </Form>
            <div className="text-center">
              <Link to="/login">
                <span>
                  Already have an account?{" "}
                  <span className="font-bold underline text-teal-600">
                    Login!
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
