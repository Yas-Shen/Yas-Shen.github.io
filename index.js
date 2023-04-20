function toggleMenu() {
    const x = document.getElementsByClassName("menuItems") [0];
    if(x.className === "menuItems") {
        x.className += " responsive";
    } else {
        x.className = "menuItems";
    }
}
