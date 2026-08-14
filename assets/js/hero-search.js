/* ==========================================================================
   Hero Instant Search Engine
   ========================================================================== */

function initHeroSearch(inputId, resultsContainerId, lang = 'en') {
    const searchInput = document.getElementById(inputId);
    const resultsContainer = document.getElementById(resultsContainerId);

    if (!searchInput || !resultsContainer) return;

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();

        if (query.length === 0) {
            resultsContainer.innerHTML = '';
            resultsContainer.style.display = 'none';
            return;
        }

        // Search matching logic across Title, Description & Keywords
        const filtered = siteSearchIndex.filter(item => {
            const title = (item.title[lang] || item.title['en']).toLowerCase();
            const desc = (item.desc[lang] || item.desc['en']).toLowerCase();
            const keywords = item.keywords.join(" ").toLowerCase();
            return title.includes(query) || desc.includes(query) || keywords.includes(query);
        });

        renderHeroResults(filtered, resultsContainer, query, lang);
    });

    // Close results dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
            resultsContainer.style.display = 'none';
        }
    });

    // Re-open results if input gets focus with existing query
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length > 0) {
            this.dispatchEvent(new Event('input'));
        }
    });
}

function renderHeroResults(results, container, query, lang) {
    if (results.length === 0) {
        const noResultsMsg = {
            en: `No tools or guides found matching "${query}"`,
            bn: `"${query}" এর সাথে মিল রেখে কোনো পোস্ট বা টুলস পাওয়া যায়নি`,
            hi: `"${query}" से मेल खाता कोई परिणाम नहीं मिला`
        };
        
        container.innerHTML = `<div class="hero-search-empty">${noResultsMsg[lang] || noResultsMsg['en']}</div>`;
        container.style.display = 'block';
        return;
    }

    let html = '<div class="hero-search-results-grid">';
    results.forEach(item => {
        const title = item.title[lang] || item.title['en'];
        const desc = item.desc[lang] || item.desc['en'];
        const url = item.url[lang] || item.url['en'];

        html += `
            <a href="${url}" class="hero-search-card">
                <span class="hero-search-icon">${item.icon}</span>
                <div class="hero-search-details">
                    <h4>${title}</h4>
                    <p>${desc}</p>
                </div>
            </a>
        `;
    });
    html += '</div>';

    container.innerHTML = html;
    container.style.display = 'block';
}