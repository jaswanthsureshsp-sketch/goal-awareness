document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".block, .title");

    items.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(16px)";

        setTimeout(() => {
            item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 120);
    });
});
