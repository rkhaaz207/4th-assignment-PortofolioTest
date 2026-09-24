const siteData = {
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ],
  quickStats: [
    '1 year programming experience',
    '2 years video editing experience',
    'Open to internships'
  ],
  skills: {
    programming: ['Java', 'Python'],
    editing: ['Video editing', 'Visual storytelling', 'Content polishing'],
    multilingual: ['Indonesian', 'English']
  },
  experience: {
    company: 'PT Arkha Solusindo Teknologi',
    role: '[Add role title]',
    dates: '[Add dates]',
    details: [
      'Created promotional videos for business and campaign needs.',
      'Designed flyers to support marketing and promotional content.',
      'Worked with stakeholders to align visual output with communication goals.'
    ]
  },
  projects: [
    {
      title: 'Project title',
      status: 'Coming soon',
      description: 'Add a short project summary here when your work is ready to be showcased.'
    },
    {
      title: 'Project title',
      status: 'Coming soon',
      description: 'Add a short project summary here when your work is ready to be showcased.'
    },
    {
      title: 'Project title',
      status: 'Coming soon',
      description: 'Add a short project summary here when your work is ready to be showcased.'
    }
  ],
  media: [
    {
      title: 'Reel placeholder',
      status: 'Coming soon',
      description: 'Add a short intro reel or highlight clip here when available.'
    },
    {
      title: 'Campaign placeholder',
      status: 'Coming soon',
      description: 'Add a selected edit or promotional project here when ready.'
    },
    {
      title: 'Portfolio clip placeholder',
      status: 'Coming soon',
      description: 'Add a final showcase clip here to present your editing style.'
    }
  ],
  education: [
    {
      name: 'SMA Sejahtera 1 Depok',
      period: '2022–2025'
    },
    {
      name: 'Syarif Hidayatullah State Islamic University of Jakarta',
      period: '2025–present',
      detail: 'Computer Science/Informatics'
    }
  ],
  contact: {
    email: 'rakha07ataya@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rakha-ataya-ar-razi-a600b837'
  }
};

const app = document.getElementById('portfolio-app');

const renderSkills = (items) => items.map((item) => `<li>${item}</li>`).join('');

const renderProjectCards = (items) =>
  items
    .map(
      (item) => `
        <article class="card card--muted" aria-label="${item.title} coming soon">
          <div class="card__eyebrow">${item.status}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="card__meta">
            <span>Stack: [Add stack]</span>
            <span>Link: [Add link]</span>
          </div>
        </article>
      `
    )
    .join('');

const renderMediaCards = (items) =>
  items
    .map(
      (item) => `
        <article class="card card--media" aria-label="${item.title} coming soon">
          <div class="media-placeholder" aria-hidden="true">
            <span>Video</span>
          </div>
          <div class="card__eyebrow">${item.status}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="card__meta">
            <span>Aspect ratio: [Add format]</span>
            <span>Duration: [Add runtime]</span>
          </div>
        </article>
      `
    )
    .join('');

const renderEducationCards = (items) =>
  items
    .map(
      (item) => `
        <article class="card">
          <div class="card__eyebrow">${item.period}</div>
          <h3>${item.name}</h3>
          ${item.detail ? `<p>${item.detail}</p>` : ''}
        </article>
      `
    )
    .join('');

app.innerHTML = `
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="#top" aria-label="Rakha Ataya Ar-Razi home">
        <span class="brand-mark">RA</span>
        <span>Rakha Ataya Ar-Razi</span>
      </a>
      <nav class="main-nav" aria-label="Primary navigation">
        ${siteData.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
      </nav>
      <div class="nav-actions">
        <button class="theme-toggle" type="button" aria-label="Switch to dark mode" aria-pressed="false">
          <span aria-hidden="true">☀️</span>
          <span class="theme-toggle__label">Light</span>
        </button>
        <a class="button button--secondary" href="#contact">Contact Me</a>
      </div>
    </div>
  </header>

  <main id="main-content">
    <section class="hero" id="top">
      <div class="container hero-grid">
        <div class="hero__content">
          <p class="eyebrow">Computer Science / Informatics Student</p>
          <h1>Rakha Ataya Ar-Razi</h1>
          <h2>Programmer & Video Editor</h2>
          <p class="lede">
            Web developer with 1 year programming experience and video editor with 2 years editing experience,
            delivering clean digital experiences and engaging visual storytelling.
          </p>
          <div class="button-row">
            <a class="button" href="#contact">Contact Me</a>
            <a class="button button--secondary" href="assets/White and Dark Grey Minimalistic Profesional Cv Resume.pdf" download>
              Download Resume
            </a>
          </div>
          <ul class="quick-facts" aria-label="Quick facts about Rakha">
            ${siteData.quickStats.map((stat) => `<li>${stat}</li>`).join('')}
          </ul>
        </div>
        <div class="portrait" aria-label="Portrait placeholder for Rakha Ataya Ar-Razi">
          <div class="portrait__frame">
            <span>RA</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <header class="section-heading">
          <p class="eyebrow">About</p>
          <h2>Creative problem-solver with a developer mindset and an editor’s eye.</h2>
        </header>
        <div class="about-grid">
          <div>
            <p>
              I am a web developer with 1 year programming experience, building practical solutions with a clean,
              user-focused approach. I also work as a video editor with 2 years editing experience, turning ideas
              into clear and engaging visual stories.
            </p>
            <p>
              I enjoy combining technology and visual communication to create experiences that are informative,
              responsive, and easy to understand.
            </p>
          </div>
          <div class="mini-card">
            <div class="mini-card__item">
              <span class="label">Focus</span>
              <strong>Web development</strong>
            </div>
            <div class="mini-card__item">
              <span class="label">Visual work</span>
              <strong>Video editing</strong>
            </div>
            <div class="mini-card__item">
              <span class="label">Career goal</span>
              <strong>Internships</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt" id="skills">
      <div class="container">
        <header class="section-heading">
          <p class="eyebrow">Skills</p>
          <h2>Technical and creative strengths.</h2>
        </header>
        <div class="skills-grid">
          <article class="card">
            <h3>Programming</h3>
            <ul class="tag-list">${renderSkills(siteData.skills.programming)}</ul>
          </article>
          <article class="card">
            <h3>Editing</h3>
            <ul class="tag-list">${renderSkills(siteData.skills.editing)}</ul>
          </article>
          <article class="card">
            <h3>Multilingual</h3>
            <ul class="tag-list">${renderSkills(siteData.skills.multilingual)}</ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="experience">
      <div class="container">
        <header class="section-heading">
          <p class="eyebrow">Experience</p>
          <h2>Professional background.</h2>
        </header>
        <article class="experience-card">
          <div class="experience-topline">
            <div>
              <h3>${siteData.experience.company}</h3>
              <p class="experience-role">${siteData.experience.role}</p>
            </div>
            <span class="experience-dates">${siteData.experience.dates}</span>
          </div>
          <ul class="experience-list">
            ${siteData.experience.details.map((detail) => `<li>${detail}</li>`).join('')}
          </ul>
        </article>
      </div>
    </section>

    <section class="section section--alt" id="projects">
      <div class="container">
        <header class="section-heading">
          <p class="eyebrow">Projects</p>
          <h2>Projects coming soon.</h2>
        </header>
        <div class="card-grid">
          ${renderProjectCards(siteData.projects)}
        </div>
      </div>
    </section>

    <section class="section" id="video-editing">
      <div class="container">
        <header class="section-heading">
          <p class="eyebrow">Video Editing</p>
          <h2>Video editing showcase coming soon.</h2>
        </header>
        <div class="card-grid">
          ${renderMediaCards(siteData.media)}
        </div>
      </div>
    </section>

    <section class="section section--alt" id="education">
      <div class="container">
        <header class="section-heading">
          <p class="eyebrow">Education</p>
          <h2>Academic background.</h2>
        </header>
        <div class="card-grid card-grid--two">
          ${renderEducationCards(siteData.education)}
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container contact-wrap">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>Let’s build something meaningful.</h2>
        </div>
        <div class="contact-list" aria-label="Contact information">
          <a href="mailto:${siteData.contact.email}">${siteData.contact.email}</a>
          <a href="${siteData.contact.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-wrap">
      <p>© 2025 Rakha Ataya Ar-Razi</p>
      <p>He/Him</p>
      <div class="footer-links" aria-label="Footer links">
        <a href="#top">Home</a>
        <a href="#contact">Contact</a>
        <a href="${siteData.contact.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  </footer>
`;

const root = document.documentElement;
const storedTheme = localStorage.getItem('theme-preference');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
root.dataset.theme = initialTheme;

const themeToggle = document.querySelector('.theme-toggle');
const themeLabel = document.querySelector('.theme-toggle__label');

function updateTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === 'dark';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.innerHTML = `<span aria-hidden="true">${isDark ? '🌙' : '☀️'}</span><span class="theme-toggle__label">${isDark ? 'Dark' : 'Light'}</span>`;
  localStorage.setItem('theme-preference', theme);
}

updateTheme(initialTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  updateTheme(nextTheme);
});
