document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const images = document.querySelectorAll(".image");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove("active"));

            // Add 'active' class to the clicked button
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            images.forEach((image) => {
                if (filterValue === "all" || image.classList.contains(filterValue)) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });
        });
    });
});


// When you touch on any type. i mage of that type will be displayed //