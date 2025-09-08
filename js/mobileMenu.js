const initMobileMenu = (hasTransparentMenu = false) => {
  const toggleButton = document.querySelector("#mobile-menu-toggle");
  const header = document.querySelector("header");
  const mobileMenu = document.querySelector("#mobile-menu");

  toggleButton.addEventListener("click", () => {
    if (mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
      if (hasTransparentMenu) header.style.backgroundColor = "none";
    } else {
      mobileMenu.classList.add("open");
      if (hasTransparentMenu) header.style.backgroundColor = "#111";
    }
  });
};
