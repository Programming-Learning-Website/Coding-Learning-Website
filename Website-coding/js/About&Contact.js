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


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop default browser page refresh

    const sendBtn = document.getElementById('sendBtn');
    const btnText = document.getElementById('btnText');
    const modal = document.getElementById('successModal');

   
    sendBtn.disabled = true;
    btnText.textContent = "Sending Message...";
    sendBtn.classList.add('opacity-75');

   
    setTimeout(() => {
       
        sendBtn.disabled = false;
        btnText.textContent = "Send Message Now";
        sendBtn.classList.remove('opacity-75');

      
        document.getElementById('contactForm').reset();

      
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }, 1000);
});


function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}