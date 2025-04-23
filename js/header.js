//
fetch("./partials/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;

    const topHeader = document.getElementById("top-header");
    const navHeader = document.getElementById("nav-header");
    const navPlaceholder = document.getElementById("nav-placeholder");

    const navHeight = () => navHeader.offsetHeight;

    function updateSticky() {
      if (!topHeader || !navHeader || !navPlaceholder) return;

      const headerBottom = topHeader.getBoundingClientRect().bottom;

      if (headerBottom <= 0) {
        navHeader.classList.add("sticky-nav");
        navPlaceholder.style.height = `${navHeight()}px`;
      } else {
        navHeader.classList.remove("sticky-nav");
        navPlaceholder.style.height = "auto";
      }
    }

    // Call once on load and on scroll
    updateSticky();
    window.addEventListener("scroll", updateSticky);
  });

fetch("./partials/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });
