import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userApi.js";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser({ email, password: pw });
      if (result.success) {
        
        if (result.token) {
          localStorage.setItem("token", result.token);
        }
        alert("로그인 성공!");
        navigate("/");
      } else {
        alert(result.message || "로그인 실패");
      }
    } catch (err) {
      alert("서버 오류");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>로그인 페이지</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={e => setPw(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginPage;
