import React from "react";
import "./Signup.css";
import { Form } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen dark:bg-slate-800">
      <section className="flex justify-center">
        <div className="w-full">
          <span>Sign Up</span>
        </div>
        <div class="w-full">
          <Form method="post">
            <label for="email">Email</label>
            <input type="email" name="email" />
            <label for="password">Password</label>
            <input type="password" name="password" />
            <button type="submit"></button>
          </Form>
        </div>
      </section>
    </div>
  );
}
