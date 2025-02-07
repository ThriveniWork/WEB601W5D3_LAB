document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll(".lightbox-toggle img");
    var photoContainer = document.querySelector("#photo");

    images.forEach(image => {
        image.addEventListener("click", function () {
            // Remove any existing zoomed image
            var existingZoom = document.querySelector(".zoomed-image-container");
            if (existingZoom) {
                existingZoom.remove();
            }

            // Create a container for the zoomed image
            var zoomContainer = document.createElement("div");
            zoomContainer.classList.add("zoomed-image-container");

            // Create the zoomed image
            var zoomedImg = document.createElement("img");
            zoomedImg.src = this.src;
            zoomedImg.alt = this.alt;
            zoomedImg.classList.add("zoomed-image");

            // Create the close button
            var closeButton = document.createElement("div");
            closeButton.classList.add("close");
            closeButton.innerHTML = "&times;";

            // Append image and close button to the zoom container
            zoomContainer.appendChild(zoomedImg);
            zoomContainer.appendChild(closeButton);
            document.body.appendChild(zoomContainer);

            // Get the clicked image's position
            var rect = this.getBoundingClientRect();
            zoomContainer.style.top = `${rect.top + window.scrollY}px`;
            zoomContainer.style.left = `${rect.left + window.scrollX}px`;
            zoomContainer.style.width = `${rect.width}px`;
            zoomContainer.style.height = `${rect.height}px`;

           
            void zoomContainer.offsetWidth;

            // Apply zoom effect
            zoomContainer.style.transform = "scale(2)";
            zoomContainer.style.zIndex = "100";

            // Function to close the zoomed image
            function closeZoom() {
                zoomContainer.style.transform = "scale(1)";
                zoomContainer.style.opacity = "0";

            }

            // Attach event listeners to close the zoom
            closeButton.addEventListener("click", closeZoom);
            zoomedImg.addEventListener("click", closeZoom);
        });
    });
});
