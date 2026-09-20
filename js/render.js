(function () {
    'use strict';

    const data = window.portfolioData;
    if (!data) return;

    const escapeHTML = (value = '') => String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');

    const setHTML = (id, html) => {
        const element = document.getElementById(id);
        if (element) element.innerHTML = html;
    };

    const shippedProjects = data.projects.filter((project) => project.link);
    setHTML('projects-grid', shippedProjects.map((project, index) => {
        const impact = (project.impact || []).slice(0, 2);
        return `
            <article class="project-card reveal">
                <div class="project-visual">
                    <span class="project-number">0${index + 1}</span>
                    <span class="project-status">Shipped product</span>
                    <img src="${escapeHTML(project.logo || project.image)}" alt="${escapeHTML(project.title)} logo" width="560" height="360" loading="lazy">
                </div>
                <div class="project-content">
                    <p class="project-kicker">${escapeHTML(project.role)} · ${escapeHTML(project.category)}</p>
                    <h3>${escapeHTML(project.title)}</h3>
                    <p class="project-subtitle">${escapeHTML(project.subtitle)}</p>
                    <p class="project-description">${escapeHTML(project.description)}</p>
                    <div class="project-impact">
                        ${impact.map((item, itemIndex) => `
                            <div><span>${itemIndex === 0 ? 'Outcome' : 'System choice'}</span><strong>${escapeHTML(item)}</strong></div>
                        `).join('')}
                    </div>
                    <div class="tech-list">
                        ${project.technologies.slice(0, 6).map((tech) => `<span>${escapeHTML(tech)}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.caseStudy ? `
                            <a class="project-link" href="${escapeHTML(project.caseStudy)}" aria-label="Read the ${escapeHTML(project.title)} case study">
                                Read case study <span aria-hidden="true">→</span>
                            </a>
                        ` : ''}
                        <a class="project-link project-link-secondary" href="${escapeHTML(project.link)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHTML(project.title)} live project">
                            Live product <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>
            </article>
        `;
    }).join(''));

    setHTML('experience-list', data.experience.map((experience) => {
        const selectedHighlights = experience.highlights.filter((_, index) => [1, 2, 4, 5, 8].includes(index));
        return `
            <article class="timeline-item reveal">
                <div class="timeline-meta"><span>${escapeHTML(experience.period)}</span><span>${escapeHTML(experience.location)}</span></div>
                <h3>${escapeHTML(experience.role)}</h3>
                <p class="timeline-company">${escapeHTML(experience.company)} · ${escapeHTML(experience.previousRole)}</p>
                <p class="timeline-description">${escapeHTML(experience.description)}</p>
                <ul class="timeline-highlights">
                    ${selectedHighlights.map((highlight) => `<li>${escapeHTML(highlight)}</li>`).join('')}
                </ul>
            </article>
        `;
    }).join(''));

    const capabilityGroups = [
        {
            title: 'Data engineering & applied AI',
            description: 'Data pipelines, analytical models, and AI applications designed around a clear decision or workflow.',
            items: ['Python', 'SQL', 'PostgreSQL', 'ETL Pipelines', 'Machine Learning', 'LLMs & RAG', 'Pandas', 'Power BI']
        },
        {
            title: 'Product engineering',
            description: 'Web and mobile products built with attention to reliability, access control, usability, and delivery.',
            items: ['JavaScript', 'Flutter', 'Dart', 'Firebase', 'Next.js', 'TypeScript', 'REST APIs', 'Git']
        },
        {
            title: 'Automation & product practice',
            description: 'Workflow mapping and automation informed by direct experience with users, teams, and business operations.',
            items: ['n8n', 'Zapier', 'Webhooks', 'Product Discovery', 'Dashboard UX', 'Figma', 'Team Leadership', 'Stakeholder Communication']
        }
    ];

    setHTML('skills-grid', capabilityGroups.map((group, index) => `
        <article class="capability-card reveal">
            <span class="capability-index">0${index + 1}</span>
            <h3>${escapeHTML(group.title)}</h3>
            <p>${escapeHTML(group.description)}</p>
            <div class="capability-list">${group.items.map((item) => `<span>${escapeHTML(item)}</span>`).join('')}</div>
        </article>
    `).join(''));

    const labProjects = data.projects.filter((project) => !project.link).slice(0, 3);
    setHTML('lab-items', labProjects.map((project, index) => `
        <article class="lab-item reveal">
            <span>0${index + 1}</span>
            <div>
                <h3>${escapeHTML(project.title)}</h3>
                <p>${escapeHTML(project.description)}</p>
            </div>
            <em>Exploration</em>
        </article>
    `).join(''));

    const contactForm = document.getElementById('contact-form');
    if (contactForm && data.email) {
        contactForm.action = `https://formsubmit.co/${encodeURIComponent(data.email)}`;
    }
})();
