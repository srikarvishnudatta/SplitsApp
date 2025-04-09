
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import client from "@/lib/queryClient.ts";
import {Toaster} from "@/components/ui/toaster.tsx";
import {ClerkProvider} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


createRoot(document.getElementById('root')!).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} 
    afterSignOutUrl={"/"} signInForceRedirectUrl={"/home"}>
        <QueryClientProvider client={client}>
            <BrowserRouter>
                <App />
                <Toaster />
            </BrowserRouter>
        </QueryClientProvider>
    </ClerkProvider>
)
