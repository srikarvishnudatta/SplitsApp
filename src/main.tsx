import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import client from "@/lib/queryClient.ts";
import { Toaster } from "sonner";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <Auth0Provider
      domain="dev-q7hp3vqqq8tiva70.us.auth0.com"
      clientId="FSxKHY49Z7aLmXI7wGepGBcynCRd0Vcc"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/app",
        audience: "http://localhost:8080",
        scope: "openid profile email",
      }}
    >
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Auth0Provider>
  </QueryClientProvider>
);
