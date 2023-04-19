import React from "react";
import "./Signup.css";
import { Form } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen w-full grid">
      <div className="place-self-center w-full md:w-1/2 ">
        <div className="w-full text-center ">
          <span className="text-3xl font-bold">Sign Up</span>
        </div>
        <div className="place-self-center p-5 rounded-lg drop-shadow-md">
          <div className="w-full">
            <Form method="post">
              <ul className="w-full p-5 grid grid-cols-1 gap-2">
                <li>
                  <label htmlFor="email" class="block">
                    <span>Email</span>
                    <input type="email" name="email" />
                  </label>
                </li>
                <li>
                  <label htmlFor="password">
                    <span>Password</span>
                    <input type="password" name="password" />
                  </label>
                </li>

                <li>
                  <label htmlFor="repeat-password">
                    <span>Repeat Password</span>
                    <input type="password" name="repeat-password" />
                  </label>
                </li>
                <li>
                  <button type="submit" class="w-full bg-green-600 mt-5">
                    Sign Up
                  </button>
                </li>
              </ul>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
