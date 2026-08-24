const header = document.querySelector(".site-header");
const progress = document.querySelector(".progress");
const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (header) header.classList.toggle("scrolled", window.scrollY > 12);
  if (progress) progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  });
  mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

const reveals = document.querySelectorAll(".reveal");
if (reduceMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((element) => element.classList.add("visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  reveals.forEach((element) => observer.observe(element));
}

const quoteForm = document.querySelector("#quote-form");
if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const selectedFile = data.get("attachment");
    const subject = `5K Power quote request — ${data.get("projectName") || data.get("company") || data.get("name")}`;
    const lines = [
      "5K Power Quote Request",
      "",
      `Name: ${data.get("name") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      "",
      `Project Name: ${data.get("projectName") || ""}`,
      `Project Location: ${data.get("location") || ""}`,
      `Project Type: ${data.get("projectType") || ""}`,
      `Desired Delivery Date: ${data.get("deliveryDate") || ""}`,
      "",
      "Project / Scope Description:",
      data.get("description") || "",
      "",
      selectedFile && selectedFile.name
        ? `Supporting document selected: ${selectedFile.name} (please attach it manually to this email draft)`
        : "Supporting document: None selected"
    ];
    window.location.href = `mailto:information@5kpower.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    const status = document.querySelector(".form-status");
    if (status) {
      status.style.display = "block";
      status.textContent = "Your email application is opening. Please attach any selected files before sending.";
    }
  });
}
