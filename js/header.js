//

fetch("./partials/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;

    const toggler = document.getElementById("navbarTogglerR");
    const icon = document.getElementById("navIcon");
    const navbarCollapse = document.getElementById("navbarsExample05");

    if (toggler && icon) {
      toggler.addEventListener("click", function () {
        setTimeout(() => {
          const isExpanded = toggler.getAttribute("aria-expanded") === "true";

          if (isExpanded) {
            icon.classList.remove("bi-list");
            icon.classList.add("bi-x", "rotating");
          } else {
            icon.classList.remove("bi-x", "rotating");
            icon.classList.add("bi-list");
          }
        }, 100);
      });
    }

    document.addEventListener("click", function (event) {
      const isClickInsideNavbar =
        navbarCollapse.contains(event.target) || toggler.contains(event.target);
      const isExpanded = toggler.getAttribute("aria-expanded") === "true";

      if (!isClickInsideNavbar && isExpanded) {
        const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
        if (collapseInstance) {
          collapseInstance.hide();
        }

        icon.classList.remove("bi-x", "rotating");
        icon.classList.add("bi-list");
      }
    });
  });

fetch("./partials/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });
