import React from "react";
import LoginSection from "../components/LoginSection.jsx";
import style from "../styles/Header.module.css";

function Header({ isLoggedIn, onLogout }) { // ★ props 구조분해!
    return (
        <header className={style.header}>
            <div><img src="/img/everlogo.png"></img></div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <LoginSection isLoggedIn={isLoggedIn} onLogout={onLogout} className={style.button}/>
            </div>
        </header>
    );
}

export default Header;
