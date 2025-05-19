//

// Add "py-5" to all <section> elements
document.querySelectorAll("section").forEach((section) => {
  section.classList.add("py-5");
});

// Add accSvg
fetch("./assets/images/accelerate.svg") // adjust path as needed
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("acc-svg-container").innerHTML = data;
  });

// Home page, IP Solutions Section
function toggleReadMore(event, link) {
  event.preventDefault();
  const paragraph = link.previousElementSibling;
  const moreText = paragraph.querySelector(".more-text");
  const dots = paragraph.querySelector(".dots");

  if (moreText.classList.contains("d-none")) {
    moreText.classList.remove("d-none");
    dots.style.display = "none";
    link.textContent = "Read less";
  } else {
    moreText.classList.add("d-none");
    dots.style.display = "inline";
    link.textContent = "Read more";
  }
}

function createSectionHeader(containerId, options) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  container.innerHTML = `
    <div class="row">
      <div class="text-center mb-3">
        <span
          class="badge rounded-pill px-3 py-2"
        >
           ${options.badgeText}
        </span>
      </div>
      <div class="col-md-12 text-center">
        <h2>${options.title}</h2>
        <hr
          class="section-divider mx-auto"
        />
        <div class="row justify-content-center mb-3">
          <div class="col-md-6 text-center">
            <p class="text-secondary fs-5">
              ${options.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  createSectionHeader("about-us-section", {
    badgeText: "About Us",
    title: "Driven by Expertise, Empowered by People",
    subtitle:
      "Leading the way in digital system design and verification with cutting-edge expertise",
  });

  createSectionHeader("services-section", {
    badgeText: "Our Services",
    title: "Specialized Expertise",
    subtitle: "Comprehensive solutions for your advanced technology needs",
  });
  createSectionHeader("ip-solutions-section", {
    badgeText: "IP Solutions",
    title: "Our IP Solutions",
    subtitle:
      "Discover our specialized intellectual property solutions designed to accelerate and optimize your digital systems.",
  });
  createSectionHeader("values-section", {
    badgeText: "Our Values",
    title: "Our Philosophy",
    subtitle:
      "We work side-by-side with your engineers — sharing expertise in ASIC, FPGA, software-hardware co-design, and verification to also upskill your internal team.",
  });
  createSectionHeader("contact-us-section", {
    badgeText: "Contact Us",
    title: "Let's Connect",
    subtitle: "Have a project in mind? Let's discuss how we can help.",
  });
});

// Our Services Cards, Read More/Less
document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more-toggle");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-target");
      const target = document.querySelector(targetId);

      // Toggle the 'expanded' class
      target.classList.toggle("expanded");

      // Change button text smoothly
      if (target.classList.contains("expanded")) {
        button.textContent = "Read less";
      } else {
        button.textContent = "Read more";
      }
    });
  });
});
