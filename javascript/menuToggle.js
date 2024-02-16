document.addEventListener("DOMContentLoaded", function () {
  const mainMenuItems = document.querySelectorAll(".ver-main > .ver-drop");

  mainMenuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      mainMenuItems.forEach(function (item) {
        if (item !== menuItem) {
          item.classList.remove("active");
        }
      });
      menuItem.classList.toggle("active");
    });
  });
});
