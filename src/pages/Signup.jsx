import { React, useState } from "react";
import { Link, Form } from "react-router-dom";
import "./Signup.css";
import InputWarning from "../components/InputWarning";

/**
 * Valid username should be less than 30 chararcters
 * And accept letters, numbers, underscores, and hyphens only.
 */
const usernameRegex = new RegExp(/^[a-zA-Z0-9_-]{1,32}$/);

/**
 * Valid password should include at least one lower-case letter, one upper-case letter, one number,
 * and one special character. Must be at least 8 characters long.
 */
const passwordRegex = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
);
const emailRegex = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+");

export default function Signup() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //Set field to true the first time it is blurred.
  const [blurred, setBlurred] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const update = (event) => {
    const target = event.currentTarget;

    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const updateBlurred = (event) => {
    const target = event.currentTarget;

    setBlurred({
      ...blurred,
      [target.name]: true,
    });
  };

  const validationRules = {
    username: usernameRegex.test(state.username),
    email: emailRegex.test(state.email),
    password: passwordRegex.test(state.password),
    confirmPassword: state.password === state.confirmPassword,
  };

  const validationWarnings = {
    username:
      state.username && blurred.username && !validationRules.username
        ? "Username must not exceed 32 characters. Please use alphanumerics, '-', and '_' only."
        : null,
    email:
      state.email && blurred.email && !validationRules.email
        ? "Email address must be valid."
        : null,
    password:
      state.password && blurred.password && !validationRules.password
        ? "Password must be at least 8 characters long and contain at least one capital letter, one lower-case letter, one number, and one special character."
        : null,
    confirmPassword:
      state.confirmPassword &&
      blurred.confirmPassword &&
      !validationRules.confirmPassword
        ? "Passwords must match."
        : null,
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
                      value={state.username}
                      onChange={update}
                      onBlur={updateBlurred}
                      required
                      className={validate("username")}
                    />
                    {validationWarnings.username && (
                      <InputWarning warning={validationWarnings.username} />
                    )}
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
                      value={state.email}
                      onChange={update}
                      onBlur={updateBlurred}
                      required
                      className={validate("email")}
                    />
                    {validationWarnings.email && (
                      <InputWarning warning={validationWarnings.email} />
                    )}
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
                      value={state.password}
                      onChange={update}
                      onBlur={updateBlurred}
                      required
                      className={validate("password")}
                    />
                    {validationWarnings.password && (
                      <InputWarning warning={validationWarnings.password} />
                    )}
                  </label>
                </li>

                <li>
                  <label htmlFor="confirmPassword">
                    <span>
                      <i className="fa fa-lock"></i>Repeat Password
                    </span>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={state.confirmPassword}
                      onChange={update}
                      onBlur={updateBlurred}
                      required
                      className={validate("confirmPassword")}
                    />
                    {validationWarnings.confirmPassword && (
                      <InputWarning
                        warning={validationWarnings.confirmPassword}
                      />
                    )}
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
