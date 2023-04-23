import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="full-height text-center flex flex-wrap justify-center content-center">
      <div>
        <h1 className="text-8xl opacity-80">Oops!</h1>
        <h2 className="text-2xl mt-5">An unexpected error occurred.</h2>
        <p className="text-xl mt-2">
          <span class="font-bold">{error.status}:</span> {error.statusText}
        </p>
      </div>
    </div>
  );
}
