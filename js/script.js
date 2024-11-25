// script.js

// Define the email address
const user = "fenoy.adria";
const domain = "gmail.com";
const email = user + "@" + domain;

// Add the email address to the DOM
document.addEventListener("DOMContentLoaded", () => {
  const emailSpan = document.getElementById("email");
  if (emailSpan) {
    emailSpan.innerHTML = `<a href="mailto:${email}">${email}</a>`;
  }
});
