const message =
  "Thank you for submitting your request. The crew will respond shortly.";

document
  .getElementById("send message")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
console.log("ok");
