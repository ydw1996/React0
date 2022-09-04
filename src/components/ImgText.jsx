import React from "react";

function ImgText() {
  return (
    <section id="imgTextType" class="imgText__wrap section nexon gray">
      <h2 class="blind">이미지 텍스트 유형</h2>
      <div class="imgText__inner container">
        <div class="imgText__txt">
          <span class="small">이미지 텍스트 유형01</span>
          <h3 class="title">유용한 사이트 살펴보기</h3>
          <p class="desc">
            웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 유용한
            사이트입니다.
          </p>
          <ul class="list">
            <li>
              <a href="/">튜토리얼 사이트</a>
            </li>
            <li>
              <a href="/">레퍼런스 사이트</a>
            </li>
            <li>
              <a href="/">웹폰트 사이트</a>
            </li>
            <li>
              <a href="/">CSS 사이트</a>
            </li>
            <li>
              <a href="/">WebGL 사이트</a>
            </li>
            <li>
              <a href="/">Youtube 사이트</a>
            </li>
          </ul>
        </div>
        <div class="imgText__img img1">
          <a href="/">레퍼런스 사이트</a>
        </div>
        <div class="imgText__img img2">
          <a href="/" class="blue">
            튜토리얼 사이트
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImgText;
