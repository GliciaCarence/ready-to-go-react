import React from "react";

const Switch = ({ switchButton, setSwitch }) => {
    const handleSwitchOn = () => {
        setSwitch(true);
    };

    const handleSwitchOff = () => {
        setSwitch(false);
    };

    return (
        <div className="switch-btn">
            <button
                onClick={handleSwitchOn}
                className={`switch-on ${
                    switchButton === true ? "purple" : "white"
                }`}
            >
                ON
            </button>

            <button
                onClick={handleSwitchOff}
                className={`switch-off ${
                    switchButton === false ? "purple" : "white"
                }`}
            >
                OFF
            </button>
        </div>
    );
};

export default Switch;
