import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const getHealth = async () => {
      const url = import.meta.env.VITE_API_URL;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("something went wrong");
      }
      const data = await res.json();
      console.log({ data });
    };
    getHealth();
  }, []);
  return (
    <div>
      <h1>Funky Prices</h1>
    </div>
  );
};

export default App;
