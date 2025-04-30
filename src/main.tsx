import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext.tsx";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={client}>
      <BrowserRouter>
      <AuthProvider>
        <App />
        <Toaster />
        </AuthProvider>
      </BrowserRouter>
  </QueryClientProvider>

);
