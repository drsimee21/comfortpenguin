(function () {
  function build(container) {
    container.textContent = "";

    for (var index = 0; index < 88; index += 1) {
      var piece = document.createElement("span");
      var isPenguin = index % 18 === 0;
      var isHeart = index % 7 === 0 && !isPenguin;
      var isCircle = index % 4 === 0 && !isPenguin && !isHeart;
      var x = (index * 37) % 101;
      var drift = (index % 2 === 0 ? 1 : -1) * (18 + (index % 7) * 10);
      var delay = (index % 24) * 82;
      var duration = 4500 + (index % 11) * 92;

      piece.className = "thank-you-confetti";
      piece.style.setProperty("--x", x + "%");
      piece.style.setProperty("--drift", drift + "px");
      piece.style.setProperty("--delay", delay + "ms");
      piece.style.setProperty("--duration", duration + "ms");
      piece.style.setProperty("--spin", index % 2 === 0 ? "82deg" : "-82deg");
      piece.style.setProperty("--scale", (0.72 + (index % 5) * 0.08).toFixed(2));
      piece.style.setProperty("--fall", 110 + (index % 8) * 3 + "vh");
      piece.style.setProperty("--size", isPenguin ? "1.08rem" : "1rem");

      if (isPenguin) {
        piece.classList.add("thank-you-confetti--penguin");
        piece.textContent = "\uD83D\uDC27";
      } else if (isHeart) {
        piece.classList.add("thank-you-confetti--heart");
        piece.textContent = "\u2661";
      } else if (isCircle) {
        piece.classList.add("thank-you-confetti--circle");
      } else {
        piece.classList.add("thank-you-confetti--piece");
      }

      container.appendChild(piece);
    }
  }

  window.ComfortPenguinConfetti = {
    build: build,
  };
})();
