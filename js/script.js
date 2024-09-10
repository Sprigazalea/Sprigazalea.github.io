const threeBarsButton = document.getElementById("dropdown-button")
const dropdownMenu = document.getElementById("dropdown")

function displayDropdown() {
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "flex";
    } else if (dropdownMenu.style.display === "flex") {
        dropdownMenu.style.display = "none"
    }
}

threeBarsButton.addEventListener("click", displayDropdown())