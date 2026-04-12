// Set active nav link - handle trailing slashes
document.addEventListener('DOMContentLoaded', () => {
    // Normalize pathname -remove trailing slash if present
    let pathname = window.location.pathname.replace(/\/$/, '');
    
    const currentFile = pathname.split('/').pop() || 'index.html';

    // remove any query string or hash (just in case)
    // const currentFile = currentFile.split('?')[0].split('#')[0];

    console.log('✅ Current page detected:', currentFile);    

    // Remove active from ALL tabs
    document.querySelectorAll('.tab-button').forEach(link => {
        link.classList.remove('active');
    });

    // Add active only to the matching one
    document.querySelectorAll('.tab-button').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentFile) {
            link.classList.add('active');
        }
    });
});

function copyEmail(e) {
    e.stopImmediatePropagation();
    const email = "contact@swacchexplorer.in";
    navigator.clipboard.writeText(email).then(() => {
        const btn = e.target.closest('button');
        const original = btn.innerHTML;
        btn.innerHTML = '✅ Copied!';
        setTimeout(() => { btn.innerHTML = original; }, 2000);
    });
}
