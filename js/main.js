document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const gnav = document.querySelector(".gnav");
  const links = document.querySelectorAll(".gnav__link");

  // （メニューが非表示・開く操作）
  function openMenu() {
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "メニューを閉じる");
    gnav.setAttribute("aria-hidden", "false");
  }

  // （メニューが展開済・閉じる操作）
  function closeMenu() {
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "メニューを開く");
    gnav.setAttribute("aria-hidden", "true");
  }

  hamburger.addEventListener("click", function () {
    // aria-expandedの値を変数expandedに格納
    const expanded = this.getAttribute("aria-expanded");

    if (expanded === "false") {
      openMenu();
    } else {
      closeMenu();
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        closeMenu();
      }
    });
  });

  //ブレイクポイントをまたいだときの挙動
  const mediaQuery = window.matchMedia("(min-width: 992px)");

  function handleBreakpointChange(event) {
    if (event.matches) {
      // PC用の初期表示
      gnav.setAttribute("aria-hidden", "false");
    } else {
      // SP用の初期表示
      closeMenu();
    }
  }

  // 初期状態の表示を設定
  handleBreakpointChange(mediaQuery);

  // メディアクエリの変更を監視
  mediaQuery.addEventListener("change", handleBreakpointChange);
});
