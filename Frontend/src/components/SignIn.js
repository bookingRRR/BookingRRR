import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { useState, useEffect } from "react";

import HomePage from "./HomePage";

import "./styles/signInStyles.css";

export default function SignIn() {
  const [flag, setFlag] = useState(false);

  function setCookie(name, value, daysToExpire) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    const cookieString = `${name}=${encodeURIComponent(
      value
    )}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieString;
  }

  useEffect(() => {
    console.log("Effect ran.Value=", flag);

    return () => {
      console.log("Clean up function run");
    };
  }, [flag]);

  return flag ? (
        <HomePage/>
  ) : (
    <section id="signIn-section">
      <div className="signIn-container">
        <h3>Sign In using your Google account</h3>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log("Initial value", flag);
            console.log(decoded);
            console.log(decoded.email);
            setCookie("email", decoded.email, 1);
            localStorage.setItem("userEmail", decoded.email);
            setFlag(!flag);
          }}
          onError={() => {
            console.log("Login Failed");
            alert("LogIn failed");
          }}
        />
      </div>
    </section>
  );
}
