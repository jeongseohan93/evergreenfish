import React, { useState } from "react";
import style from "../styles/SearchBar.module.css";
import { useNavigate } from "react-router-dom";
import SlideText from "../components/SlideText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { searchApi } from "../services/userApi"


function SearchBar() {
    const [ keyword, setKeyword ] = useState("");
    const navigate = useNavigate();

    const searchSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await searchApi( keyword );
            if(result.success){

                if(result.S_results){
                    alert(result.S_results);
                }
                navigate("/"); 
            } else {
                alert(result.message || "서버 오류 및 결과 없음");
            }
        } catch (err) {
            alert("서버 실행 안됫음");
        }
    }

    return (
        <div className={style.div}>
            <h1 className={style.content}>
                <FontAwesomeIcon icon={faLocationDot} style={{marginRight: "8px"}} />
                낚시터에서 <SlideText /> 찾고 있냐?
            </h1>
            <div className={style.search}>
                <button className={style.location}>
                    <FontAwesomeIcon icon={faLocationDot} style={{marginRight: "7px"}} />
                    역삼동
                </button>
                <form onSubmit={searchSubmit}>
                    <input 
                    placeholder="검색어를 입력해주세요"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                     />
                </form>
                
            </div>

            <div className={style.starsearchbar}>
                <span className={style.starsearch}>인기검색어</span>
                <span className={style.starsearch}>낚시대</span>
                <span className={style.starsearch}>의류</span>
                <span className={style.starsearch}>찌</span>
            </div>
        </div>
    );
}

export default SearchBar;
