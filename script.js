document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const contactBtns = document.querySelectorAll('.contact-btn, .contact-btn-hero');
    const popupOverlay = document.getElementById('popup-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const contactForm = document.getElementById('contact-form');
    const popupForm = document.getElementById('popup-form');
    const header = document.querySelector('.header');

    // ---------------------- Mobile Menu Toggle ----------------------
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });

    // ---------------------- Popup ----------------------
    contactBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            popupOverlay.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        popupOverlay.classList.remove('active');
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('active');
        }
    });

    // ---------------------- Form Submission ----------------------
    [contactForm, popupForm].forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.reset();
            if (form.id === 'popup-form') {
                popupOverlay.classList.remove('active');
            }
            // Можно добавить здесь fetch для реальной отправки
            alert('Заявка отправлена! Наш менеджер свяжется с вами.');
        });
    });

    // ---------------------- Header Scroll Effect ----------------------
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ---------------------- Fade-in Sections ----------------------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });

    // ---------------------- FAQ Toggle ----------------------
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
});
