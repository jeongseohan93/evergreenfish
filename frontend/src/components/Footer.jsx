import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.left}>
          <div className={style.logoRow}>
            <img
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/logo-footer-5817b753113e1d7d92e5ee613bf0ad2e95700e4d23ca1e56829a4d2a9a3fbe51.svg"
              alt="당근"
              className={style.logo}
            />
          </div>
          <div className={style.socialRow}>
            <a href="#"><FaFacebookF size={32} /></a>
            <a href="#"><FaInstagram size={32} /></a>
            <a href="#"><FaYoutube size={32} /></a>
          </div>
        </div>
        <div className={style.grid}>
          <div>
            <div className={style.title}>회사</div>
            <div>회사 소개</div>
            <div>당근페이</div>
            <div>팀문화</div>
            <div>서비스 소개</div>
            <div>블로그</div>
            <div>채용</div>
          </div>
          <div>
            <div className={style.title}>탐색</div>
            <div>중고거래</div>
            <div>부동산</div>
            <div>중고차</div>
            <div>알바</div>
            <div>동네업체</div>
            <div>동네생활</div>
            <div>모임</div>
            <div>채팅하기</div>
          </div>
          <div>
            <div className={style.title}>비즈니스</div>
            <div>당근 비즈니스</div>
            <div>제휴 문의</div>
            <div>광고 문의</div>
          </div>
          <div>
            <div className={style.title}>문의</div>
            <div>IR</div>
            <div>PR</div>
            <div>고객센터</div>
          </div>
          <div>
            <div className={style.title}>Karrot</div>
            <div>Canada <span>↗</span></div>
            <div>United States <span>↗</span></div>
            <div>United Kingdom <span>↗</span></div>
            <div>日本 <span>↗</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
