function toggleMenu() {
    const x = document.getElementById("menuItems");
    if (x.className !== "menuItems") {
        x.className = "menuItems";
    } else {
        x.className += " responsive";
    }
}

const icon = document.querySelector("#icon");
const menuItems = document.querySelector("#menuItems");

icon.addEventListener("click", () => {
    toggleMenu();
});

menuItems.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("item clicked");
});

document.addEventListener("click", () => {
    if (menuItems.className.includes("responsive")) {
        toggleMenu();
    }
});

