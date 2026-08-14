/* ==========================================================================
   Pet & Animal Care World - Mobile Navigation Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    if (menuBtn && mainNav) {
        // Toggle mobile navigation menu
        menuBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            mainNav.classList.toggle('active');
            
            // Change hamburger icon to close (X) icon
            if (mainNav.classList.contains('active')) {
                menuBtn.innerHTML = '✕';
            } else {
                menuBtn.innerHTML = '☰';
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!mainNav.contains(e.target) && !menuBtn.contains(e.target)) {
                mainNav.classList.remove('active');
                menuBtn.innerHTML = '☰';
            }
        });
    }
});