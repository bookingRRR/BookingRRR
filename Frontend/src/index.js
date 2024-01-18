import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH}>
        <App />
    </GoogleOAuthProvider>
);

