// Toggle and Responsive
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    })
}

navSlide();

// Clean form before unload
window.onbeforeunload = () => { 
    for (const form of document.getElementsByTagName("form")) { // iterate tiap form yang ada biar direset
        form.reset();
    }
};