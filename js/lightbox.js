document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".lightbox-toggle img").addEventListener("click", function () {
        const backdrop = document.querySelector(".backdrop");
        const box = document.querySelector(".box");

        // Show the backdrop
        backdrop.style.display = "block";
        backdrop.style.opacity = "0.8";

        // Show the lightbox container
        box.style.display = "block";

        // Create an image element and set its attributes
        const img = document.createElement("img");
        img.src = this.src;
        img.alt = this.alt;
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        img.style.borderRadius = "5px";

        // Remove any existing content in the lightbox
        while (box.firstChild) {
            box.removeChild(box.firstChild);
        }

        // Add close button
        const closeButton = document.createElement("div");
        closeButton.classList.add("close");
        closeButton.innerHTML = "&times;";

        // Append the close button and image
        box.appendChild(closeButton);
        box.appendChild(img);

        // Event listener to close the lightbox
        closeButton.addEventListener("click", function () {
            backdrop.style.display = "none";
            box.style.display = "none";
        });

        // Close lightbox when clicking on backdrop
        backdrop.addEventListener("click", function () {
            backdrop.style.display = "none";
            box.style.display = "none";
        });
    });
});
