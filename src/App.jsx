import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import ScrollToAnchor from "./utils/ScrollToAnchor";

import Inst_download from "./page/inst_download";
import Home from "./page/index";
import NoMatch from "./page/404";
import Dashboard from "./page/dashboard";
import GPTengine from "./page/GPTengine";
import Aboutus from "./page/aboutUs";
import Payment from "./page/payment";
import Pricing from "./page/pricing";
import Docs from "./page/documents";

// end layout choose

function App() {
    if (!localStorage.getItem("authUser") && !localStorage.getItem("mode")) {
        localStorage.setItem("mode", "trial");
        localStorage.setItem("access_count", 20); // this access count will be deducted when they trial
        localStorage.setItem(
            "lastInputOutput",
            JSON.stringify({ input: "", output: "", regenerated: false })
        );
    }


    return (
        <>
            <Router>
                <ScrollToAnchor/>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/gptengine" element={<GPTengine />}/>
                    <Route exact path="/instructions" element={<Inst_download />}/>
                    <Route exact path="/dashboard" element={<Dashboard />}/>
                    <Route exact path="/aboutus" element={<Aboutus />}/>
                    <Route exact path="/pricing" element={<Pricing />}/>
                    <Route exact path="/payment" element={<Payment />}/>
                    <Route exact path="/docs" element={<Docs />}/>

                    <Route path="/*" element={<NoMatch />} />
                </Routes>
            </Router>
            {/* < /> */}
        </>
    );
}
export default App;
