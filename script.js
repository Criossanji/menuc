// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Interactive image click (optional)
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".menu-item img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            // Create overlay
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100vw";
            overlay.style.height = "100vh";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = 1000;

            // Create enlarged image
            const enlargedImg = document.createElement("img");
            enlargedImg.src = img.src;
            enlargedImg.alt = img.alt;
            enlargedImg.style.maxWidth = "90%";
            enlargedImg.style.maxHeight = "90%";
            enlargedImg.style.boxShadow = "0 0 20px #fff";
            enlargedImg.style.borderRadius = "10px";

            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);

            // Remove overlay on click
            overlay.addEventListener("click", () => {
                document.body.removeChild(overlay);
            });
        });
    });
});
