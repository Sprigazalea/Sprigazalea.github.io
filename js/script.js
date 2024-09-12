const threeBarsButton = document.getElementById("dropdown-button")
const dropdownMenu = document.getElementsByClassName("dropdown")

function displayDropdown() {
    threeBarsButton.style.color = "blue"
}

document.addEventListener("click", displayDropdown())