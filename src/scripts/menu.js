const initMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger?.addEventListener("click", () => {
    // Toggle the 'expanded' class to show or hide the menu
    navLinks?.classList.toggle("expanded");
    // Toggle the 'active' class for the hamburger icon
    hamburger?.classList.toggle("active");
  });
};

document.addEventListener("astro:page-load", initMenu);
