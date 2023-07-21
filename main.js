// Define constants for the input and output elements
const inputText = document.getElementById("input-text");
const key = document.getElementById("key");
const outputText = document.getElementById("output-text");

// Retrieve saved input values from local storage, if available
const savedInputText = localStorage.getItem("inputText");
const savedKey = localStorage.getItem("key");

// Set input values to saved values, or clear if none found
inputText.value = savedInputText ? savedInputText : "";
key.value = savedKey ? savedKey : "";

// Add event listeners to input elements to save their values to local storage on change
inputText.addEventListener("input", function() {
  localStorage.setItem("inputText", inputText.value);
});

key.addEventListener("input", function() {
  localStorage.setItem("key", key.value);
});

/**
 * Encrypts the input text using the provided key
 */
function encrypt() {
  const inputTextValue = inputText.value;
  const keyValue = key.value;

  // Validate input values
  if (!inputTextValue || !keyValue) {
    alert("Please enter both input text and key.");
    return;
  }

  // Encrypt the input text using the provided key
  let ciphertext = "";
  for (let i = 0; i < inputTextValue.length; i++) {
    const charCode = inputTextValue.charCodeAt(i) ^ keyValue.charCodeAt(i % keyValue.length);
    ciphertext += String.fromCharCode(charCode);
  }

  // Display the encrypted text in the output text area
  outputText.value = ciphertext;
}

/**
 * Decrypts the input text using the provided key
 */
function decrypt() {
  const inputTextValue = inputText.value;
  const keyValue = key.value;

  // Validate input values
  if (!inputTextValue || !keyValue) {
    alert("Please enter both input text and key.");
    return;
  }

  // Decrypt the input text using the provided key
  let plaintext = "";
  for (let i = 0; i < inputTextValue.length; i++) {
    const charCode = inputTextValue.charCodeAt(i) ^ keyValue.charCodeAt(i % keyValue.length);
    plaintext += String.fromCharCode(charCode);
  }

  // Display the decrypted text in the output text area
  outputText.value = plaintext;
}
//copy result function 
function copyToClipboard() {
  var output = document.getElementById("output-text");
  output.select();
  document.execCommand("copy");
}