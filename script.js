document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 200
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        console.log('Form submitted with data:', Object.fromEntries(formData));
        alert('Thank you for your inquiry. Our luxury concierge will contact you shortly.');
        form.reset();
    });

    // Add scroll event listener to change header background and add parallax effect
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Header background change
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Parallax effect for hero section
        hero.style.backgroundPositionY = scrollTop * 0.7 + 'px';

        // Hide/show header on scroll
        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Add hover effect for gallery images
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            galleryImages.forEach(otherImg => {
                if (otherImg !== img) {
                    otherImg.style.opacity = '0.5';
                    otherImg.style.transform = 'scale(0.95)';
                }
            });
        });
        img.addEventListener('mouseout', () => {
            galleryImages.forEach(otherImg => {
                otherImg.style.opacity = '1';
                otherImg.style.transform = 'scale(1)';
            });
        });
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero h1');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 1000);
});