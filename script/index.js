const dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", function () {
  const dropdownContent = this.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
});

window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdown")) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(function (dropdownContent) {
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    });
  }
});
