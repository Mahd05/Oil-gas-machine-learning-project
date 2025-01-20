document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.querySelector("#mobile-navbar-open-btn");
    const closeBtn = document.querySelector("#mobile-navbar-close-btn");
    const overlay = document.querySelector("#mobile-navbar-overlay");
    const nav = document.querySelector("nav")

    const handleResize = () => {
        if (window.innerWidth >= 1024) { // Adjust the threshold as needed
            overlay.classList.add("hidden");
            overlay.classList.remove("show");
            document.body.classList.remove("mobile-menu-scrolling");
            nav.classList.remove("hidden")
        }
    };

    if (openBtn && closeBtn && overlay) {
        openBtn.addEventListener('click', () => {
            overlay.classList.remove("hidden");
            overlay.classList.add("show");
            document.body.classList.add("mobile-menu-scrolling");
            nav.classList.add("hidden")
        });

        closeBtn.addEventListener('click', () => {
            overlay.classList.remove("show");
            overlay.classList.add("hidden");
            document.body.classList.remove("mobile-menu-scrolling");
            nav.classList.remove("hidden")

        });

        window.addEventListener('resize', handleResize);
    }

    // Initial check in case the page loads with a larger width
    handleResize();
});
