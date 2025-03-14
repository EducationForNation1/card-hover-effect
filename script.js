document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseover", () => {
        card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("active");
    });
});
