import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import api from "./api";

import Login from "./Pages/Login/Login";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Servers from "./Pages/Servers/Servers";
import Staff from "./Pages/Staff/Staff";
import Home from "./Pages/Home/Home";
import Fun from "./Pages/Fun/Fun";
import Rules from "./Pages/Rules/Rules";
import Changelog from "./Pages/Changelog/Changelog";
import Profile from "./Pages/Profile/Profile";

import "./App.css";

function App() {
    api.provider();

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/login/*" element={<Login />} />
                    <Route path="/servers/*" element={<Servers />} />
                    <Route path="/staff/*" element={<Staff />} />
                    <Route path="/fun/*" element={<Fun />} />
                    <Route path="/rules/*" element={<Rules />} />
                    <Route path="/changelog/*" element={<Changelog />} />
                    <Route path="/profile/*" element={<Profile />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
