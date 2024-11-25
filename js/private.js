let storedHash = "";

// Fetch the stored hash from the config.json file
async function loadConfig() {
  const response = await fetch("../data/config.json");
  const config = await response.json();
  storedHash = config.storedHash;
}

// Verify the password
async function checkPassword() {
  const userInput = document.getElementById("password").value;
  const encoder = new TextEncoder();
  const data = encoder.encode(userInput);

  // Hash the input using SHA-256
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

  if (hashHex === storedHash) {
    document.getElementById("protected-content").style.display = "block";
    document.getElementById("password-prompt").style.display = "none";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// Attach the checkPassword function to the button
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", checkPassword);
});

// Load the hash on page load
loadConfig();
