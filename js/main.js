(function () {
    'use strict';

    const header = document.getElementById('site-header');
    const menuButton = document.querySelector('.menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    const closeMenu = () => {
        if (!menuButton || !mobileNav) return;
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        mobileNav.hidden = true;
        document.body.classList.remove('menu-open');
    };

    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', () => {
            const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', String(!isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
            mobileNav.hidden = isOpen;
            document.body.classList.toggle('menu-open', !isOpen);
        });
        mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
        window.addEventListener('resize', () => {
            if (window.innerWidth > 820) closeMenu();
        });
    }

    const year = document.getElementById('current-year');
    if (year) year.textContent = String(new Date().getFullYear());

    const revealItems = document.querySelectorAll('.reveal');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
        revealItems.forEach((item) => observer.observe(item));
    }
})();
