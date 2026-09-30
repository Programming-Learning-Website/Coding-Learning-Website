function toggleMode() {
    const htmlTag = document.documentElement;
    const btn = document.getElementById('darkModeBtn');
    
    if (htmlTag.classList.contains('dark')) {
        htmlTag.classList.remove('dark');
        btn.textContent = '🌙';
    } else {
        htmlTag.classList.add('dark');
        btn.textContent = '☀️';
    }
}

// Put the icon menu//
 function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }


// ៣. មុខងារស្វែងរកវគ្គសិក្សា (Search Filter)
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('courseSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll('main section article');
            
            cards.forEach(card => {
                const title = card.querySelector('h2').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const tag = card.querySelector('span').textContent.toLowerCase();
                
                // បើអត្ថបទត្រូវគ្នា បង្ហាញកាតនោះឡើងវិញ បើមិនទាន់លាក់វា
                if (title.includes(query) || description.includes(query) || tag.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
