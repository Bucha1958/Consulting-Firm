import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Features from "./pages/Features";
import Layout from "./components/Layout";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<AboutUs/>}/>
                <Route path="contact" element={<ContactUs/>}/>
                <Route path="features" element={<Features/>}/>
            </Routes>
        </Layout>
    );
};

export default App;
