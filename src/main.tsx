
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import client from "@/lib/queryClient.ts";
import {Toaster} from "@/components/ui/toaster.tsx";



createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={client}>
      <BrowserRouter>
      <App />
          <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
)
