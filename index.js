var button = document.getElementById("button");
var qrcode = document.getElementById("qrcode");
var qrtext = document.getElementById("qrtext");

// Detect if the user is on a mobile device using regular expression
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  // Show the button
  button.style.display = "block";
  qrcode.style.display = "none";
  qrtext.style.display = "none";
} else {
  // Hide the button
  button.style.display = "none";
  qrcode.style.display = "flex";
  qrtext.style.display = "block";
}


window.addEventListener("resize", function() {
  if (isMobile) {
    // Show the button
    button.style.display = "block";
    qrcode.style.display = "none";
    qrtext.style.display = "none";
  } else {
    // Hide the button
    button.style.display = "none";
    qrcode.style.display = "flex";
    qrtext.style.display = "block";
  }
});