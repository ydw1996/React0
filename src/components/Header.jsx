import React from "react";

function Header(prps) {
  return (
    <header id="headerType" class={"header__wrap ${props.fonts}"}>
      <div class="header__inner">
        <div class="header__logo">
          <a href="/">
            web <em>site</em>
          </a>
        </div>
        <nav class="header__menu">
          <ul>
            <li>
              <a href="/">헤더 영역</a>
            </li>
            <li>
              <a href="/">슬라이드 영역</a>
            </li>
            <li>
              <a href="/">배너 영역</a>
            </li>
            <li>
              <a href="/">컨텐츠 영역</a>
            </li>
            <li>
              <a href="/">푸터 영역</a>
            </li>
          </ul>
        </nav>
        <div class="header__member">
          <a href="/">로그인</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
