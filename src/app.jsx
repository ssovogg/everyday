import "./app.css";
import Login from "./pages/Login/Login";
import AppRouter from "./pages/AppRouter";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

function App({ auth, db }) {
  const authService = getAuth();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} auth={auth} db={db} />
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
