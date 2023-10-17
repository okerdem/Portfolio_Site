/* hamburger menu */

function toggleMenu() {
  /* get the first elements of the class in brackets to const value */
  const menu = document.querySelector(".menu_links");
  const icon = document.querySelector(".hamburger_icon");
  /* on and off the "open" of elements with specified class */
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function changeTheme(img) {
  if (img.src.match(/sun_on/)) {
    img.src = "./assets/sun_off.png";
    document.body.style.backgroundColor = "gray";
  } else {
    img.src = "./assets/sun_on.png";
    document.body.style.backgroundColor = "white";
  }
}