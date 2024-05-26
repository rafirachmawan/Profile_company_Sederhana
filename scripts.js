document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });

                // Remove the active class from all sections
                document.querySelectorAll("section").forEach(section => {
                    section.classList.remove("active-section");
                });

                // Add the active class to the target section
                targetSection.classList.add("active-section");
            }
        });
    });
});
