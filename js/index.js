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
      "We work side-by-side with your engineers — sharing expertise in ASIC, FPGA, hardware-software co-design, and verification to also upskill your internal team.",
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

document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  let lastScrollY = window.scrollY;

  const observer = new IntersectionObserver(
    (entries) => {
      const scrollDown = window.scrollY > lastScrollY;
      lastScrollY = window.scrollY;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        } else {
          if (!scrollDown) {
            entry.target.classList.remove("revealed");
          }
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
});

// About Us, Meet the Team Cards
const cardData = [
  {
    title: "Vladimir",
    text: "Co-founder and technical expert specialized in ASIC/FPGA architecture and design, hardware architecture and hardware-software co-design",
    image: "./assets/images/Vladimir_Petrovic.d38017a8221ce1219ab0.jpg",
  },
  {
    title: "Zarko",
    text: "Co-founder with focus on embedded software and HPC systems, software architecture and hardware-software co-design",
    image: "./assets/images/Zarko_Gvozdenovic.a2a3cc5a6c1a1847b5d2.png",
  },
  {
    title: "Chris",
    text: "Leading consultant in business development",
    image: "./assets/images/Chris.jpg",
  },
  // {
  //   title: "Andreja",
  //   text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   image: "./assets/images/Andreja.png"
  // },
  // {
  //   title: "Milos",
  //   text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   image: "./assets/images/Milos.png"
  // }
];

const container = document.getElementById("card-container");

cardData.forEach((card) => {
  container.innerHTML += `
    <div class="col">
      <div class="card h-100 border-0 bg-light">
        <img src="${card.image}" class="card-img-top card-img-fixed mx-auto d-block" alt="${card.title}">

        <div class="card-body">
          <h3 class="card-title">${card.title}</h3>
          <p class="card-text">${card.text}</p>
        </div>
      </div>
    </div>
  `;
});
