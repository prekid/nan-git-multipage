function insertHero({ id = "hero-bg", title = "Welcome", subtitle = "" } = {}) {
  // Inject CSS if not already present
  if (!document.getElementById("hero-style")) {
    const style = document.createElement("style");
    style.id = "hero-style";
    style.textContent = `
        .hero-angle-divider {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100px;
          overflow: hidden;
          line-height: 0;
        }

        .angle-svg {
          display: block;
          width: 100%;
          height: 100px;
        }
      `;
    document.head.appendChild(style);
  }

  // Create the hero section
  const hero = document.createElement("section");
  hero.className = "hero_body d-flex align-items-center text-center";
  hero.id = id;

  hero.innerHTML = `
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <div class="smoke-overlay mb-4">
              <h1>${title}</h1>
            </div>
            <hr class="mx-auto border" id="hero_hr" />
            ${subtitle ? `<h3 class="mt-4">${subtitle}</h3>` : ""}
          </div>
        </div>
      </div>
      <div class="hero-angle-divider">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="angle-svg">
          <polygon fill="#f8f9fa" points="0,100 100,0 100,100" />
        </svg>
      </div>
    `;

  const firstSection = document.querySelector("section");
  if (firstSection) {
    firstSection.parentNode.insertBefore(hero, firstSection);
  } else {
    document.body.prepend(hero);
  }
}
