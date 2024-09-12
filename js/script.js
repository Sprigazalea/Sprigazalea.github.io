const threeBarsButton = document.getElementsByClassName("fa-solid fa-bars")
const dropdownMenu = document.getElementsByClassName("dropdown")

function displayDropdown() {
    dropdownMenu.style.color = "blue";
}

threeBarsButton.addEventListener("click", displayDropdown())