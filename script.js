document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    images.forEach((img) => {
        img.addEventListener("error", () => {
            img.remove();
        });
    });
});