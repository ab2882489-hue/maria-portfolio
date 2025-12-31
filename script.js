// Typing animation for tagline
const tagline = document.getElementById("tagline");
const text = "Crafting words and web experiences that connect and inspire.";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    tagline.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

window.addEventListener("load", () => {
  tagline.innerHTML = "";
  typeEffect();
});

// Scroll reveal animation
const sections = document.querySelectorAll(".section");

function revealSections() {
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("active-section");
    } else {
      section.classList.remove("active-section");
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections();

// Active sidebar highlight
const navLinks = document.querySelectorAll(".sidebar ul li a");

function activeLink() {
  let fromTop = window.scrollY + 200;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", activeLink);
