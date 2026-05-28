function row(label, text) {
  return `
    <div class="table-row">
      <div class="table-label">${label}</div>
      <div class="table-text">${text}</div>
    </div>
  `;
}

function renderImages(images = [], className = "image-grid") {
  if (!images || images.length === 0) return "";
  return `
    <div class="${className}">
      ${images.map((img) => `
        <figure>
          <img src="${img.src}" alt="${img.caption}">
          <figcaption>${img.caption}</figcaption>
        </figure>
      `).join("")}
    </div>
  `;
}

function renderCases(cases = []) {
  if (!cases || cases.length === 0) return "";
  return `
    <div class="case-grid">
      ${cases.map((item, index) => `
        <div class="case-card">
          <span>${index + 1}</span>
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderEffect(effect = []) {
  if (!effect || effect.length === 0) return "";
  return `
    <div class="effect-grid effect-grid-${effect.length}">
      ${effect.map(([label, text]) => `
        <div>
          <span>${label}</span>
          <strong>${text}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderAiSections(project) {
  const ai = project.ai || {};
  const sections = ai.sections || [
    {
      title: ai.process,
      cases: ai.cases,
      images: ai.images,
      effect: ai.effect
    }
  ];

  return sections.map((section, index) => `
    <div class="ai-section">
      <p class="process" style="--num:'${index + 1}'">${section.title || ""}</p>
      ${renderCases(section.cases)}
      ${renderImages(section.images, "ai-image-grid")}
      ${renderEffect(section.effect)}
    </div>
  `).join("");
}

function projectTemplate(project) {
  const overview = project.overview.map(([label, text]) => row(label, text)).join("");
  const images = renderImages(project.images);

  const lessons = project.lessons.map((lesson) => `
    <div class="lesson-card">
      <p class="mini-label">LESSON</p>
      <h4>${lesson.title}</h4>
      <blockquote>“${lesson.quote}”</blockquote>
      <p>${lesson.description}</p>
    </div>
  `).join("");

  return `
    <section class="project" id="${project.id}">
      <p class="project-label">${project.number}</p>
      <h2>${project.title}<span>${project.subtitle}</span></h2>

      <section class="section-block">
        <h3>01 프로젝트 개요</h3>
        <p class="lead">${project.intro}</p>
        <div class="info-table">${overview}</div>
        ${images}
      </section>

      <section class="section-block">
        <h3>02 AI 활용 현황</h3>
        <div class="tool-box">
          <span>사용 툴</span>
          <strong>${project.ai.tool}</strong>
        </div>
        ${renderAiSections(project)}
      </section>

      <section class="section-block">
        <h3>03 레슨런</h3>
        ${lessons}
      </section>
    </section>
  `;
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <header class="hero">
      <p class="eyebrow">${REPORT.hero.label}</p>
      <h1>${REPORT.hero.title}</h1>
      <p class="hero-quote">“${REPORT.hero.quote}”</p>
      <p class="hero-meta">${REPORT.hero.meta}</p>
      <div class="hero-info">
        <div><span>PROJECTS</span><strong>${REPORT.hero.projects}</strong></div>
        <div><span>TOOL</span><strong>${REPORT.hero.tools}</strong></div>
      </div>
    </header>

    <main>
      ${REPORT.projects.map(projectTemplate).join("")}
      <section class="closing">
        <h2>${REPORT.closing.quote}</h2>
        <p>${REPORT.closing.meta}</p>
      </section>
    </main>
  `;
}

render();
