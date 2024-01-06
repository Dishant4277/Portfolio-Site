function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// The function that handles the form submission event.
function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  sendMail(name, email, message);
}
// Attach the event listener to the form element.
document
  .querySelector(".contact-form")
  .addEventListener("submit", handleFormSubmit);

function sendMail(name, email, message) {
  var link =
    "mailto:dishantbalotra4277@gmail.com" +
    "?cc=" +
    "&subject=" +
    encodeURIComponent("Name: " + name + "     Sender mail: " + email) +
    "&body=" +
    encodeURIComponent(message);
  window.location.href = link;
}
