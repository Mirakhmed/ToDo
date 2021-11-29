import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {ToDosPage} from "./pages/ToDosPages";
import {AboutPage} from "./pages/AboutPage";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route element={<ToDosPage />} path="/" />
                    <Route element={<AboutPage />} path="/about" />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
