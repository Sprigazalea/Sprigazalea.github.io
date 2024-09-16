const threeBarsButton = document.getElementById("dropdown-button")
const dropdownMenu = document.getElementsByClassName("dropdown")

function displayDropdown() {
    threeBarsButton.style.display = "none"
}

threeBarsButton.addEventListener("click", displayDropdown)