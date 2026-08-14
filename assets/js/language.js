/* ==========================================================================
   Pet & Animal Care World - Language Switcher Functionality
   ========================================================================== */

// Toggle Dropdown Visibility
function toggleLangDropdown() {
    var dropdown = document.getElementById('langDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// Save Selected Language Preference
function selectLang(langCode) {
    if (langCode) {
        localStorage.setItem('petcare_lang', langCode);
    }
}

// Close Dropdown when clicking outside
window.addEventListener('click', function(e) {
    var langBtn = document.getElementById('langBtn');
    var dropdown = document.getElementById('langDropdown');
    
    if (langBtn && dropdown) {
        if (!langBtn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    }
});