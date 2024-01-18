import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";

import "./styles.css";

export default function App() {
  function getCookie(name) {
    const cookies = document.cookie.split(";");

    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split("=");

      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }

    return null; // Cookie not found
  }

  const userValue = getCookie("email");

  if (userValue != null) {    
    return (
        <HomePage/>
    );
  } else {
    return <SignIn />;
  }

}
