// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateIcon(currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

// Update icon based on theme
function updateIcon(theme) {
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Smooth scroll for anchor links (if any are added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add hover effect to skill circles
document.querySelectorAll('.skill-circle').forEach(circle => {
    circle.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    circle.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Print functionality (optional)
function printResume() {
    window.print();
}

// Add keyboard shortcut for theme toggle (Ctrl/Cmd + Shift + T)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        themeToggle.click();
    }
});

// Console message for developers
console.log('%c👋 Hello! This presentation page was built with HTML, CSS, and JavaScript.', 
    'color: #f0a500; font-size: 16px; font-weight: bold;');
console.log('%cDeveloped for Alberto Rosselli - Senior IT Specialist', 
    'color: #5a6268; font-size: 14px;');

// Auto-detect browser and highlight the right install button
(function () {
  const ua = navigator.userAgent || "";
  const isEdge = /\bEdg\//.test(ua);
  const isChrome = !isEdge && /\bChrome\//.test(ua) && /\bEdg\//.test(ua) === false;

  const btnChrome = document.getElementById("btnChrome");
  const btnEdge = document.getElementById("btnEdge");
  const wrap = document.querySelector(".install-buttons");

  // Hide both "Recommended" badges by default
  [btnChrome, btnEdge].forEach(btn => btn && btn.classList.remove("recommended"));

  if (isEdge && btnEdge) {
    btnEdge.classList.add("recommended");
    wrap?.setAttribute("data-browser-detected", "edge");
  } else if (isChrome && btnChrome) {
    btnChrome.classList.add("recommended");
    wrap?.setAttribute("data-browser-detected", "chrome");
  } else {
    wrap?.setAttribute("data-browser-detected", "unknown");
  }
})();


