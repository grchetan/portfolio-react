import React from 'react';
import '../style/ProjectsSection.css';
import '../style/style.css';
import '../style/responsive.css';

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    desc: 'My personal portfolio showcasing skills, projects and contact details.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://grchetan.github.io/My-Portfolio/',
  },
  {
    id: 2,
    title: 'Gaming Website',
    desc: 'Gaming themed website with modern UI and animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://grchetan.github.io/game/',
  },
  {
    id: 3,
    title: 'ROG Asus Clone Webpage',
    desc: 'Clone of ASUS ROG website focusing on layout and design accuracy.',
    tech: ['HTML', 'CSS'],
    demo: 'https://grchetan.github.io/Rog-Asus/',
  },
  {
    id: 4,
    title: 'Calculator Web App',
    desc: 'Simple and fast calculator web application.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://grchetan.github.io/calculater/',
  },
  {
    id: 5,
    title: 'SiteReadyPro – Business Template',
    desc: 'Business website template ready for client use.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://grchetan.github.io/sitereadypro/',
  },
  {
    id: 6,
    title: 'Travel Itinerary Generator',
    desc: 'Generates travel plans automatically for users.',
    tech: ['JavaScript', 'API'],
    demo: 'https://grchetan.github.io/Travel-Itinerary-Generator/',
  },
  {
    id: 7,
    title: 'Bhagavad Gita Web App',
    desc: 'Web app to read Bhagavad Gita shlokas online.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://grchetan.github.io/bhagwat-gita/',
  },
  {
    id: 8,
    title: 'Weather Forecast Application',
    desc: 'Live weather forecast app using API.',
    tech: ['JavaScript', 'Weather API'],
    demo: 'https://grchetan.github.io/weather-app/',
  },
];

export default function Projects() {
  return (
    <section className="cp-projects-section" id="projects">
      <h2 className="head">Projects</h2>
      <h3 className="cp-sub-heading">Selected Projects</h3>

      <div className="cp-projects-grid">
        {projects.map((project) => (
          <div className="cp-project-card" key={project.id}>
            <h4 className="cp-project-title">{project.title}</h4>
            <p className="cp-project-desc">{project.desc}</p>

            <div className="cp-tech-list">
              {project.tech.map((tech) => (
                <span key={tech} className="cp-tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="cp-btn cp-btn-primary"
            >
              Visit Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
