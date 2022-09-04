import React from "react";

function Image() {
  const title = "포트폴리오가 실력이다";
}

function Slider(prps) {
  return (
    <section id="sliderType" class="slider__wrap">
      <h2 class="blind">슬라이드 유형</h2>
      <div class="slider__inner">
        <div class="slider">
          <div class="slider__img">
            <div class="desc">
              <span>developer</span>
              <h3>new frontend</h3>
              <p>
                너무 무리하지 말아요! 이미 당신은 잘하고 있고!
                <br />
                앞으로도 잘 할 수 있어요!
              </p>
              <div class="btn">
                <a href="/">자세히 보기</a>
                <a href="/" class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </div>
          <div class="slider__arrow">
            <a href="/" class="left">
              <span class="ir">이전 이미지</span>
            </a>
            <a href="/" class="right">
              <span class="ir">다음 이미지</span>
            </a>
          </div>
          <div class="slider__dot">
            <a href="/" class="dot active">
              <span class="ir">1</span>
            </a>
            <a href="/" class="dot">
              <span class="ir">2</span>
            </a>
            <a href="/" class="dot">
              <span class="ir">3</span>
            </a>
            <a href="/" class="play">
              <span class="ir">플레이</span>
            </a>
            <a href="/" class="stop">
              <span class="ir">정지</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
