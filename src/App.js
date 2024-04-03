import './App.css';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://hgaqblbtsmlyvjygmwdq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnYXFibGJ0c21seXZqeWdtd2RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5NzY0MDUsImV4cCI6MjAyNzU1MjQwNX0.ueasmJSE5paoGEw1FS-aUyNl8KqISNy4zXYNcamltDY");
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;