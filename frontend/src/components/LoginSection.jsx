import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Header.module.css";

function LoginSection({ isLoggedIn, onLogout }) {
  return (
    <>
      {!isLoggedIn && (
        <Link to="/login">
          <button className={style.button}>로그인</button>
        </Link>
      )}
      {isLoggedIn && (
        <button className={style.button} onClick={onLogout}>
          로그아웃
        </button>
      )}
    </>
  );
}

export default LoginSection;
