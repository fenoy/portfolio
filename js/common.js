// script.js

// Load HTML content into an element
async function loadHTML(id, filePath) {
  const element = document.getElementById(id);
  if (element) {
    const response = await fetch(filePath);
    if (response.ok) {
      const content = await response.text();
      element.innerHTML = content;
    } else {
      console.error(`Failed to load ${filePath}: ${response.status}`);
    }
  }
}

// Load the header, navbar, and footer
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "../html/header.html");
  loadHTML("navbar", "../html/nav.html");
  loadHTML("footer", "../html/footer.html");
});

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
