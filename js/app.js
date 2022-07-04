//           MENU

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  }
}
hamburger.addEventListener("click", toggleMenu);

//             FAQ

const allCross = document.querySelectorAll(".visible-pannel img");

allCross.forEach((Element) => {
  Element.addEventListener("click", function () {
    const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
    const currentChoice = this.parentNode.parentNode.childNodes[3];
    // console.log(this.src);
    if (this.src.includes("croix")) {
      this.src = "/img/minus.svg";
      gsap.to(currentChoice, {
        duration: 0.2,
        height: height,
        opacity: 1,

        padding: "20px 15px",
      });
    } else if (this.src.includes("minus")) {
      this.src = "/img/croix.svg";
      gsap.to(currentChoice, {
        duration: 0.2,
        height: 0,
        opacity: 0,

        padding: "0px 15px",
      });
    }
  });
});