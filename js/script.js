const threeBarsButton = document.getElementById("dropdown-button")
const dropdownMenu = document.getElementById("dropdown")

function displayDropdown() {
    if (dropdownMenu.classList.contains("dropdown")) {
        dropdownMenu.classList.replace("dropdown", "")
    } else {
        console.log("error!")
    }
}

threeBarsButton.addEventListener("click", displayDropdown)