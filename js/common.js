// script.js

// Define the email address
const encoded = "ZmVub3kuYWRyaWE=";
const domain = "gmail.com";
const user = atob(encoded);

// Add the email address to the DOM
document.addEventListener("DOMContentLoaded", () => {
  const emailSpan = document.getElementById("email");
  if (emailSpan) {
    emailSpan.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
  }
});
