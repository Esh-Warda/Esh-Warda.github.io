document.addEventListener('DOMContentLoaded', function () {
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const nav = document.getElementsByTagName("nav")[0];
    
    if (bar) {
        bar.addEventListener("click", () => {
            nav.classList.add('active');
        });
    }
    if (close) {
        close.addEventListener("click", () => {
            nav.classList.remove('active');
        });
    }
    window.addEventListener('click', (event) => {
        if (nav.classList.contains('active') && !nav.contains(event.target) && event.target !== bar) {
            nav.classList.remove('active');
        }
    });
});
