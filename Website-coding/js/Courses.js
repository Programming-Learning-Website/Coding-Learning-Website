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