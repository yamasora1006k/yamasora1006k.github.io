/** @format */

$(".openbtn").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
  $(".circle-bg").toggleClass("circleactive");
});

$("#g-nav a").click(function () {
  $(".openbtn").removeClass("active");
  $("#g-nav").removeClass("panelactive");
  $(".circle-bg").removeClass("circleactive");
});

$(".your-close-button-class").on("click", function () {
  $("#g-nav").removeClass("panelactive");
  $(".circle-bg").removeClass("circleactive");
});

document.addEventListener("DOMContentLoaded", function () {
  // リンク要素の取得
  var link = document.getElementById("Happy Birthday");

  // クリックイベントの追加
  link.addEventListener("click", function (event) {
    // デフォルトのアンカー動作を防止
    event.preventDefault();

    // "gazou"クラスを持つ最初の要素を取得
    var gazouElement = document.querySelector(".gazou");

    // その要素までスクロール
    if (gazouElement) {
      gazouElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  const images = document.querySelectorAll(".box img");
  images.forEach((image) => observer.observe(image));
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  const images = document.querySelectorAll(".kaworu img");
  images.forEach((image) => observer.observe(image));
});
/**
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // 画像の10%が見えた時点でトリガー
    }
  );

  const images = document.querySelectorAll(".box img");
  images.forEach((image) => {
    observer.observe(image);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const box = document.querySelector(".box");
  let images = Array.from(box.children);
  images = shuffleArray(images);

  // シャッフルされた画像を.boxに再挿入
  images.forEach((image) => box.appendChild(image));
});

// 配列をシャッフルする関数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 要素を入れ替え
  }
  return array;
}*/

confetti({
  particleCount: 500,
  spread: 100,
  origin: { y: 0.555 },
});
