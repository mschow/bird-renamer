import { useEffect } from "react";
import "./App.css";
import { useLoaderData } from "react-router-dom";

function App() {
  const birds = useLoaderData();

  useEffect(() => {
    console.log("birds", birds);
  }, [birds]);

  return <></>;
}

export default App;
