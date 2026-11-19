// Replace this with the monitored business inbox before launch.
const BUSINESS_EMAIL = "hello@vichoraglobal.example";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("enquiryForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  if (BUSINESS_EMAIL.endsWith(".example")) {
    document.getElementById("formStatus").textContent =
      "Before launch, replace hello@vichoraglobal.example in script.js with your real business email.";
    return;
  }
  const data = new FormData(form);
  const subject = encodeURIComponent("Vichora Global sourcing enquiry — " + data.get("category"));
  const body = encodeURIComponent(
    "Name: " + data.get("name") + "\nEmail: " + data.get("email") +
    "\nBusiness: " + data.get("business") + "\nCategory: " + data.get("category") +
    "\n\nRequirement:\n" + data.get("details")
  );
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  document.getElementById("formStatus").textContent =
    "Your email app should open with the enquiry prepared. Please send it from your email app.";
});

document.getElementById("newsletterForm")?.addEventListener("submit", event => {
  event.preventDefault();
  alert("Newsletter signup is not connected yet. Add your free MailerLite or Buttondown form embed before collecting subscribers.");
});
