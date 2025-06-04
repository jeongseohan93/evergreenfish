import React, { useState } from "react";
import style from "../styles/BannerSlider.module.css";

function BannerSlider() {
  const banners = [
    { title: "1", subtitle: "1", date: "1" },
    { title: "2", subtitle: "2", date: "2" },
    { title: "3", subtitle: "3", date: "3" },
    { title: "4", subtitle: "4", date: "4" },
    { title: "5", subtitle: "5", date: "5" },
  ];

  const VISIBLE_COUNT = 3;
  const CARD_WIDTH = 200 + 16; // 카드+마진
  const [startIdx, setStartIdx] = useState(0);

  const slideLeft = () => {
    if (startIdx > 0) setStartIdx(startIdx - 1);
  };
  const slideRight = () => {
    if (startIdx < banners.length - VISIBLE_COUNT) setStartIdx(startIdx + 1);
  };

  return (
    <div className={style.sliderContainer}>
      <button
        className={`${style.arrowButton} ${style.left}`}
        onClick={slideLeft}
        disabled={startIdx === 0}
        aria-label="이전"
      >
        &lt;
      </button>
      <div
        className={style.sliderTrack}
        style={{
          transform: `translateX(-${startIdx * CARD_WIDTH}px)`,
          width: `${banners.length * CARD_WIDTH}px`,
        }}
      >
        {banners.map((b, i) => (
          <div
            key={i}
            className={style.bannerCard}
            onClick={() => alert(b.title)}
          >
            <div className={style.bannerImgBox}>{b.title}</div>
            <div className={style.bannerText}>
              <div className={style.bannerTitle}>{b.title}</div>
              <div className={style.bannerSubtitle}>{b.subtitle}</div>
              <div className={style.bannerDate}>{b.date}</div>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`${style.arrowButton} ${style.right}`}
        onClick={slideRight}
        disabled={startIdx >= banners.length - VISIBLE_COUNT}
        aria-label="다음"
      >
        &gt;
      </button>
    </div>
  );
}

export default BannerSlider;
