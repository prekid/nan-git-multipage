//

// Values page - JS code (TEST)
loadSolutionContent(
  "FPGA Solutions",
  "We specialize in FPGA design and implementation, offering tailored solutions for high-performance systems.",
  "FPGA Solutions",
  [
    {
      title: "High-Speed Interfaces",
      text: "Custom IP blocks for PCIe, Ethernet, and more.",
    },
    {
      title: "Low-Power Design",
      text: "Optimized for power-sensitive applications.",
    },
    {
      title: "Rapid Prototyping",
      text: "Fast turnaround from design to deployment.",
    },
  ]
);

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
