document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const contactBtns = document.querySelectorAll('.contact-btn, .contact-btn-hero');
    const popupOverlay = document.getElementById('popup-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const contactForm = document.getElementById('contact-form');
    const popupForm = document.getElementById('popup-form');
    const header = document.querySelector('.header');

    /* ------------------ Мобильное меню ------------------ */
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });

    /* ------------------ Popup ------------------ */
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

    [contactForm, popupForm].forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.reset();
            if (form.id === 'popup-form') {
                popupOverlay.classList.remove('active');
            }
            alert('Спасибо! Ваша заявка отправлена.');
        });
    });

    /* ------------------ Scroll Header ------------------ */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ------------------ Fade-in Sections ------------------ */
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

    /* ------------------ FAQ Toggle ------------------ */
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = answer.classList.contains('active');

            // Скрываем все ответы
            document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('active'));
            document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));

            // Если не был активен, открываем текущий
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
});
