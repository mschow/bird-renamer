import { React, useState } from "react";
import { Link, Form } from "react-router-dom";
import "./Signup.css";

/**
 * Valid username should be less than 30 chararcters
 * And accept letters, numbers, underscores, and hyphens only.
 */
const usernameRegex = new RegExp(/^[a-zA-Z0-9_-]{3,15}$/);

/**
 * Valid password should include at least one lower-case letter, one upper-case letter, one number,
 * and one special character. Must be at least 8 characters long.
 */
const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
);
const emailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default function Signup() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validationRules = {
    username: usernameRegex.test(state.username),
    email: passwordRegex.test(state.password),
    password: emailRegex.test(state.email),
    confirmPassword: state.password === state.confirmPassword,
  };

  const update = (event) => {
    const target = event.currentTarget;

    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  //Checks that all form inputs are valid.
  const formIsValid = () => Object.values(validationRules).every((val) => val);

  const validate = (field) =>
    state[field] && !validationRules[field] ? "invalid" : undefined;

  return (
    <div className="w-full flex justify-center">
      <div className="mt-10 w-full md:w-2/5 min-w-[25em] max-w-[30em]">
        <div className="w-full text-center ">
          <span className="text-3xl font-bold">Create an Account</span>
        </div>
        <div className="px-5 rounded-lg drop-shadow-sm">
          <div className="w-full">
            <Form method="post">
              <ul className="w-full p-5 grid grid-cols-1 gap-2">
                <li>
                  <label htmlFor="username" className="block">
                    <span>
                      <i className="fa fa-user"></i>Username
                    </span>
                    <input
                      type="text"
                      name="username"
                      onChange={update}
                      required
                      className={validate("username")}
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="email" className="block">
                    <span>
                      <i className="fa fa-envelope"></i>Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      onChange={update}
                      required
                      className={validate("email")}
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="password">
                    <span>
                      <i className="fa fa-lock"></i>Password
                    </span>
                    <input
                      type="password"
                      name="password"
                      onChange={update}
                      required
                      className={validate("password")}
                    />
                  </label>
                </li>

                <li>
                  <label htmlFor="repeat-password">
                    <span>
                      <i className="fa fa-lock"></i>Repeat Password
                    </span>
                    <input
                      type="password"
                      name="confirmPassword"
                      onChange={update}
                      required
                      className={validate("confirmPassword")}
                    />
                  </label>
                </li>
                <li>
                  <button
                    type="submit"
                    className="teal-btn w-full mt-5"
                    disabled={!formIsValid()}
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
            </Form>
            <div className="text-center">
              <Link to="/login">
                <span>
                  Already have an account?{" "}
                  <span className="hyperlink">Login!</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
