document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".hero_swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    speed: 1000,

    /* 👇 Added keyboard controls */
    keyboard: {
      enabled: false,
      onlyInViewport: true, // optional: works only when header is visible
    },
  });
});
const scrollButton = document.getElementById("scroll-button");
    if (scrollButton) {
        scrollButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }