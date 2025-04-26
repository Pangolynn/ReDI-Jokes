import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import {NewJokes} from "./components/NewJokes.tsx";
import {Library} from "./components/Library.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<NewJokes />} />
                    <Route path="library" element={<Library />} />
                </Route>
            </Routes>

        </StrictMode>
    </BrowserRouter>,
)
