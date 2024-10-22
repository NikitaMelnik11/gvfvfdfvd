document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize Animate On Scroll
    AOS.init({
        duration: 1000,
        once: true,
        offset: 200
    });

    // Custom cursor
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', function(event) {
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
    });

    document.addEventListener('mousedown', function() {
        cursor.style.transform = 'scale(0.8)';
    });
    document.addEventListener('mouseup', function() {
        cursor.style.transform = 'scale(1)';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
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
    galleryImages.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            galleryImages.forEach(function(otherImage) {
                if (otherImage !== image) {
                    otherImage.style.opacity = '0.5';
                    otherImage.style.transform = 'scale(0.95)';
                }
            });
        });
        image.addEventListener('mouseout', function() {
            galleryImages.forEach(function(otherImage) {
                otherImage.style.opacity = '1';
                otherImage.style.transform = 'scale(1)';
            });
        });
    });

    // Enhance typing effect for hero title
    const heroTitle = document.querySelector('.hero h1');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 80);
        }
    }
    setTimeout(typeWriter, 1000);

    // Add glowing effect to CTA button
    const ctaButton = document.querySelector('.cta-button');
    setInterval(function() {
        ctaButton.style.boxShadow = '0 0 20px rgba(212,175,55,0.8)';
        setTimeout(function() {
            ctaButton.style.boxShadow = 'none';
        }, 1000);
    }, 3000);

    // Simple testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
    }

    // Initialize testimonials
    testimonials.forEach(function(testimonial, index) {
        testimonial.style.display = index === 0 ? 'block' : 'none';
    });

    // Change testimonial every 5 seconds
    setInterval(showNextTestimonial, 5000);
});
