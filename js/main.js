(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hero = document.getElementById('hero');
    const contactForm = document.getElementById('contact-form');

    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', async () => {
            const email = (window.portfolioData && window.portfolioData.email) || 'abirkhan88821@gmail.com';
            try {
                await navigator.clipboard.writeText(email);
                copyEmailBtn.textContent = 'Copied!';
                setTimeout(() => { copyEmailBtn.textContent = 'Copy email'; }, 2000);
            } catch {
                window.location.href = `mailto:${email}`;
            }
        });
    }

    // Custom cursor (desktop only)
    if (!prefersReducedMotion && window.innerWidth > 1024 && cursorDot && cursorRing) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX + 'px';
            const y = e.clientY + 'px';
            cursorDot.style.left = x;
            cursorDot.style.top = y;
            cursorRing.style.left = x;
            cursorRing.style.top = y;
        });

        document.querySelectorAll('a, button, .project-card, .blog-card').forEach((el) => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('glass', 'border-b', 'border-gray-200/50');
            } else {
                navbar.classList.remove('glass', 'border-b', 'border-gray-200/50');
            }
        }, { passive: true });
    }

    // Mobile menu
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', String(!isHidden));
        });
    }

    // Scroll reveal + skill bars
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('visible');

            entry.target.querySelectorAll('.skill-bar').forEach((bar) => {
                bar.style.width = bar.getAttribute('data-width');
            });
        });
    }, observerOptions);

    function observeReveal() {
        document.querySelectorAll('.scroll-reveal:not([data-observed])').forEach((el) => {
            el.setAttribute('data-observed', 'true');
            observer.observe(el);
        });
    }

    observeReveal();

    function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterBtns.forEach((b) => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach((card) => {
                const categories = card.getAttribute('data-category').split(' ');
                const show = filter === 'all' || categories.includes(filter);

                if (show) {
                    card.style.display = 'block';
                    requestAnimationFrame(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    }

    if (window.portfolioData) {
        observeReveal();
        initProjectFilters();
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });

            if (mobileMenu) mobileMenu.classList.add('hidden');
            if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Hero parallax (respect reduced motion)
    if (!prefersReducedMotion && hero) {
        window.addEventListener('scroll', () => {
            hero.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
        }, { passive: true });
    }

    // Contact form submits via FormSubmit (configured in portfolio-data + render.js)
})();
