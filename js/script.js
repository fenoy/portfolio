// script.js

// Define the email address
const user = "fenoy.adria";
const domain = "gmail.com";
const email = user + "@" + domain;

// Add the email address to the DOM
document.addEventListener("DOMContentLoaded", () => {
  const emailSpan = document.getElementById("email");
  if (emailSpan) {
    const encoded = "ZmVub3kuYWRyaWE=";
    const domain = "gmail.com";
    const user = atob(encoded);
    emailSpan.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
  }
});
