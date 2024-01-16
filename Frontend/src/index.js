import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <GoogleOAuthProvider clientId="900023061203-498uqp6lkj8gup0o1lgbmiqn63romq1f.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
);

