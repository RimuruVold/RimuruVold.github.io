window.addEventListener("scroll", function() {
    const parallaxBg = document.querySelector(".parallax-bg");
    const yOffset = window.pageYOffset;
    parallaxBg.style.transform = `translate3d(0, ${yOffset * 0.5}px, 0)`; // Adjust the parallax effect here
});
