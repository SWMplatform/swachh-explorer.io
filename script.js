 
// copyEmail – used ONLY on index.html
 
window.copyEmail = function(e) {
    e.stopImmediatePropagation();
    
    const email = "contact@swacchexplorer.in";
    
    navigator.clipboard.writeText(email).then(() => {
        const btn = e.target.closest('button');
        if (btn) {
            const original = btn.innerHTML;
            btn.innerHTML = 'Copied!';
            setTimeout(() => { 
                btn.innerHTML = original; 
            }, 2000);
        }
    }).catch(err => {
        console.error('Clipboard copy failed:', err);
    });
};


function loadPartials() {
    // Header
    fetch('header.html')
        .then(r => r.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
        })
        .catch(err => console.error('Header load failed:', err));

    // Footer
    fetch('footer.html')
        .then(r => r.text())
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        })
        .catch(err => console.error('Footer load failed:', err));
}

function setActiveNav() {
    const pathname = window.location.pathname.replace(/\/$/, '');
    const currentFile = pathname.split('/').pop() || 'index.html';

    // Small delay so header partial has time to load
    setTimeout(() => {
        document.querySelectorAll('.tab-button').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentFile) {
                link.classList.add('active');
            }
        });
    }, 80);
}

 
// Run when the page is ready
 
document.addEventListener('DOMContentLoaded', () => {
    loadPartials();
    setActiveNav();
});
