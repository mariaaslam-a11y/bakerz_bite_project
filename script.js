// Gallery category filter
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filters .filter-btn");
    const galleryCards = document.querySelectorAll(".gallerycard .card3");

    // Do nothing on pages that do not contain the gallery.
    if (filterButtons.length === 0 || galleryCards.length === 0) {
        return;
    }

    function showCategory(category, clickedButton) {
        // Remove the active state from gallery filter buttons only.
        filterButtons.forEach(function (button) {
            button.classList.remove("active");
            button.setAttribute("aria-pressed", "false");
        });

        // Activate only the button that was clicked.
        clickedButton.classList.add("active");
        clickedButton.setAttribute("aria-pressed", "true");

        // Show only cards matching the selected category.
        galleryCards.forEach(function (card) {
            if (category === "all" || card.dataset.name === category) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    }

    // Each click changes the filter immediately (no double-click needed).
    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            showCategory(button.dataset.name, button);
        });
    });

    // Get category from URL
    const params = new URLSearchParams(window.location.search);
    const category = params.get("filter") || "all";

    // Find matching filter button
    const selectedButton = document.querySelector(
        '.filters .filter-btn[data-name="' + category + '"]'
    );

    // Apply selected category
    const allButton = document.querySelector(
        '.filters .filter-btn[data-name="all"]'
    );

    if (selectedButton) {
        showCategory(category, selectedButton);
    } else if (allButton) {
        showCategory("all", allButton);
    }
});
