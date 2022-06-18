const navbar = document.querySelectorAll(".about");
const contents = document.querySelectorAll(".content-container");
const contact = document.querySelector(".contact-me");
console.log();
navbar.forEach((a, y) => {
  a.addEventListener("click", () => {
    if (a.classList.contains("a")) {
      contents[0].classList.add("active");
      contents[1].classList.remove("active");
      contents[2].classList.remove("active");
    } else if (a.classList.contains("b")) {
      contents[1].classList.add("active");
      contents[0].classList.remove("active");
      contents[2].classList.remove("active");
    } else if (a.classList.contains("c")) {
      contents[2].classList.add("active");
      contents[0].classList.remove("active");
      contents[1].classList.remove("active");
    }
  });
});

contact.addEventListener("click", () => {
  contents[2].classList.add("active");
  contents[0].classList.remove("active");
  contents[1].classList.remove("active");
});
