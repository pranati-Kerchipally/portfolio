// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Ambient custom cursor effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    // Only apply on non-touch devices
    if(window.innerWidth > 768) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // trigger on load

// Navbar glass effect on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.background = 'rgba(3, 4, 8, 0.8)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.background = 'rgba(255, 255, 255, 0.03)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Update active state in nav
            document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});
