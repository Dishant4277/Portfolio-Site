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
  const designation = formData.get("designation");
  const country = formData.get("country");

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log(`Designation: ${designation}`);
  console.log(`Country: ${country}`);

  sendMail(name, email, message, designation, country);
}
// Attach the event listener to the form element.
document
  .querySelector(".contact-form")
  .addEventListener("submit", handleFormSubmit);

function sendMail(name, email, message, designation, country) {
  var link =
    "mailto:dishantbalotra4277@gmail.com" +
    "?cc=" +
    "&subject=" +
    encodeURIComponent(
      "Name: " +
        name +
        "   Sender mail: " +
        email +
        "   Designation: " +
        designation +
        "   Country: " +
        country
    ) +
    "&body=" +
    encodeURIComponent(message);
  window.location.href = link;
}
