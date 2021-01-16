import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Switch from "./components/Switch";
import Footer from "./components/Footer";

// to add icons from react-fontawesome package :
// yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
library.add(faSpaceShuttle);

const App = () => {
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);
    const [switch3, setSwitch3] = useState(false);

    return (
        <>
            <Header />
            <section className="container">
                <div>
                    <Switch switchButton={switch1} setSwitch={setSwitch1} />
                    <Switch switchButton={switch2} setSwitch={setSwitch2} />
                    <Switch switchButton={switch3} setSwitch={setSwitch3} />
                </div>

                <div
                    className={`text-container ${
                        // if switch is on : apply 'green' class
                        // else : apply 'red' class
                        switch1 === true && switch2 === true && switch3 === true
                            ? "green"
                            : "red"
                    }`}
                >
                    <p>
                        {switch1 === true &&
                        switch2 === true &&
                        switch3 === true
                            ? "Go!"
                            : "No way!"}
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default App;
