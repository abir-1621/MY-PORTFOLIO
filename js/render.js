(function () {
    'use strict';

    const data = window.portfolioData;
    if (!data) return;

    const initials = data.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

    const categoryColors = {
        'Startup Product': 'bg-indigo-100 text-indigo-700',
        'AI/ML': 'bg-emerald-100 text-emerald-700',
        'Mobile App': 'bg-sky-100 text-sky-700',
        'UI/UX': 'bg-pink-100 text-pink-700',
    };

    const skillIcons = {
        chart: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
        mobile: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>',
        code: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>',
        layers: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>',
        users: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>',
    };

    function setText(id, text) {
        const el = document.getElementById(id);
        if (el && text != null) el.textContent = text;
    }

    function setHTML(id, html) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    }

    document.title = `${data.name} — ${data.shortHeadline}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = `${data.name} — ${data.title}. ${data.shortHeadline}`;

    document.querySelectorAll('[data-logo]').forEach((el) => {
        el.innerHTML = `${initials}<span class="text-accent">.</span>`;
    });

    setText('footer-copy', `© ${new Date().getFullYear()} ${data.name}. Crafted with passion and precision.`);
    setText('hero-badge', data.availability);
    setHTML('hero-headline', 'Building <span class="gradient-text">AI-powered software</span> for real-world business problems');
    setText('hero-description', data.heroDescription);
    setText('projects-btn-text', data.projectsButtonText);
    setText('contact-btn-text', data.contactButtonText);
    setText('hero-roles-text', data.title.replace(/\s*\|\s*/g, ' · '));

    const profilePhoto = document.getElementById('profile-photo');
    if (profilePhoto && data.profileImage) {
        profilePhoto.src = data.profileImage;
        profilePhoto.alt = `${data.name} — profile photo`;
    }

    setHTML('hero-code', [
        '<div class="space-y-4 font-mono text-sm" aria-hidden="true">',
        '<div class="flex gap-4"><span class="text-gray-400 w-8">1</span><span><span class="text-purple-600">const</span> <span class="text-blue-600">builder</span> = {</span></div>',
        '<div class="flex gap-4"><span class="text-gray-400 w-8">2</span><span class="pl-4"><span class="text-sky-600">focus</span>: [<span class="text-green-600">\'Data Science\'</span>, <span class="text-green-600">\'Flutter\'</span>, <span class="text-green-600">\'AI/ML\'</span>],</span></div>',
        '<div class="flex gap-4"><span class="text-gray-400 w-8">3</span><span class="pl-4"><span class="text-sky-600">startup</span>: <span class="text-green-600">\'HiLinkz / RyoGas\'</span>,</span></div>',
        '<div class="flex gap-4"><span class="text-gray-400 w-8">4</span><span class="pl-4"><span class="text-sky-600">location</span>: <span class="text-green-600">\'Erlangen, DE\'</span></span></div>',
        '<div class="flex gap-4"><span class="text-gray-400 w-8">5</span><span>};</span></div>',
        '</div>',
    ].join(''));

    setText('about-text', data.about);
    setText('about-badge-stat', data.stats[3]?.value || '2019');
    setText('about-badge-label', data.stats[3]?.label || 'Experience Since');

    setHTML('about-stats', data.stats.map((stat) => `
        <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div class="text-3xl font-bold text-accent mb-1">${stat.value}</div>
            <div class="text-sm font-medium text-gray-800 mb-1">${stat.label}</div>
            <div class="text-xs text-gray-500">${stat.description}</div>
        </div>
    `).join(''));

    setHTML('focus-areas', data.focusAreas.map((area) =>
        `<span class="px-3 py-1.5 bg-white border border-gray-200 text-sm text-gray-700 rounded-full">${area}</span>`
    ).join(''));

    setHTML('skills-grid', Object.values(data.skills).map((group, i) => `
        <div class="scroll-reveal group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500"${i ? ` style="transition-delay: ${i * 50}ms"` : ''}>
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${group.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">${skillIcons[group.icon] || skillIcons.code}</svg>
            </div>
            <h3 class="font-display text-xl font-bold mb-4">${group.title}</h3>
            <div class="flex flex-wrap gap-2">
                ${group.items.map((item) => `<span class="px-3 py-1 bg-gray-50 border border-gray-100 text-xs font-medium text-gray-700 rounded-full">${item}</span>`).join('')}
            </div>
        </div>
    `).join(''));

    setHTML('experience-list', data.experience.map((exp) => `
        <article class="scroll-reveal bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                    <h3 class="font-display text-2xl font-bold">${exp.role}</h3>
                    <p class="text-accent font-medium mt-1">${exp.company}</p>
                    ${exp.previousRole ? `<p class="text-sm text-gray-500 mt-1">${exp.previousRole}</p>` : ''}
                </div>
                <div class="text-sm text-gray-500 md:text-right shrink-0">
                    <div>${exp.period}</div>
                    <div>${exp.location}</div>
                </div>
            </div>
            <p class="text-gray-600 leading-relaxed mb-6">${exp.description}</p>
            <ul class="space-y-2 mb-6">
                ${exp.highlights.map((h) => `<li class="flex gap-3 text-sm text-gray-600"><span class="text-accent mt-1 shrink-0">▸</span><span>${h}</span></li>`).join('')}
            </ul>
            <div class="flex flex-wrap gap-2">
                ${exp.technologies.map((tech) => `<span class="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">${tech}</span>`).join('')}
            </div>
        </article>
    `).join(''));

    const filters = [
        { id: 'all', label: 'All Work' },
        { id: 'startup', label: 'Startup' },
        { id: 'ai', label: 'AI/ML' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'uiux', label: 'UI/UX' },
    ];

    setHTML('project-filters', filters.map((f, i) => `
        <button type="button" class="filter-btn ${i === 0 ? 'active' : ''} px-6 py-2.5 rounded-full border border-gray-200 text-sm font-medium transition-all hover:border-primary" data-filter="${f.id}" role="tab" aria-selected="${i === 0}">${f.label}</button>
    `).join(''));

    setHTML('projects-grid', data.projects.map((project) => {
        const color = categoryColors[project.category] || 'bg-gray-100 text-gray-600';
        return `
        <article class="project-card scroll-reveal group" data-category="${project.categorySlug}">
            <div class="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-4">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700" loading="lazy" width="800" height="600">
                <div class="project-overlay absolute inset-0 bg-primary/85 opacity-0 transition-opacity duration-300 flex items-end p-6">
                    <div class="text-white text-sm space-y-2">
                        <p class="font-medium">${project.role}</p>
                        ${project.featured ? '<span class="inline-block px-2 py-0.5 bg-white/20 rounded text-xs">Featured</span>' : ''}
                    </div>
                </div>
            </div>
            <div class="space-y-3">
                <div class="flex items-center gap-2 flex-wrap">
                    <span class="px-3 py-1 ${color} text-xs font-medium rounded-full">${project.category}</span>
                </div>
                <h3 class="font-display text-xl font-bold group-hover:text-accent transition-colors">${project.title}</h3>
                <p class="text-sm text-gray-500">${project.subtitle}</p>
                <p class="text-gray-600 text-sm line-clamp-3">${project.description}</p>
                <div class="flex flex-wrap gap-1.5 pt-1">
                    ${project.technologies.slice(0, 4).map((t) => `<span class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">${t}</span>`).join('')}
                </div>
            </div>
        </article>`;
    }).join(''));

    setHTML('education-grid', data.education.map((edu, i) => `
        <article class="scroll-reveal bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl"${i ? ` style="transition-delay: ${i * 100}ms"` : ''}>
            <div class="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-4">${edu.period}</div>
            <h3 class="font-display text-xl font-bold mb-2">${edu.degree}</h3>
            <p class="text-accent font-medium text-sm mb-1">${edu.institution}</p>
            ${edu.location ? `<p class="text-gray-500 text-sm mb-4">${edu.location}</p>` : '<div class="mb-4"></div>'}
            <p class="text-gray-600 text-sm leading-relaxed">${edu.description}</p>
        </article>
    `).join(''));

    setHTML('languages-list', data.languages.map((lang) => `
        <div class="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <span class="font-medium">${lang.language}</span>
            <span class="text-sm text-gray-500">${lang.level}</span>
        </div>
    `).join(''));

    setHTML('target-roles', data.targetRoles.map((role) =>
        `<span class="px-3 py-1.5 bg-white/10 border border-white/10 text-sm rounded-full">${role}</span>`
    ).join(''));

    setText('contact-cta', data.contactCTA);
    setText('contact-email', data.email);
    setText('contact-location', data.location);

    const emailLink = document.getElementById('contact-email-link');
    if (emailLink) emailLink.href = `mailto:${data.email}`;

    const githubLink = document.getElementById('contact-github');
    if (githubLink && data.github) githubLink.href = data.github;

})();
