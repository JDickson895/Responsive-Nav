window.onload = function () {
    const toggles = document.querySelectorAll('.menu-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const targetId = toggle.getAttribute('data-target');
            const navLinks = document.getElementById(targetId);
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
    });
};
