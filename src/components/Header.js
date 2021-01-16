import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header className="header">
            <FontAwesomeIcon
                icon="space-shuttle"
                className="space-shuttle"
                size="3x"
            />
            <h1 className="title">Ready To Go</h1>
        </header>
    );
};

export default Header;
