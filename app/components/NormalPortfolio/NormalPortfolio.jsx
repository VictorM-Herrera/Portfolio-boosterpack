import React from "react";
import "./portfolio.css";
import { useLanguage } from "@/app/context/LanguageContex";
import Image from "next/image";
export default function NormalPortfolio({ view, setView }) {
  const { lang } = useLanguage();
  return (
    <section className="normal-page">
      <div className="view-toggle">
        <button className={view === "cards" ? "active" : ""} onClick={() => setView("cards")}>
          {lang === "en" ? "Cards" : "Cartas"}
        </button>
        <button className={view === "classic" ? "active" : ""} onClick={() => setView("classic")}>
          {lang === "en" ? "Classic" : "Clasico"}
        </button>
      </div>

      <div className="normal-layout">
        <aside className="normal-sidebar">
          <div className="normal-avatar">
            <Image src={"/hero_image.png"} alt="Hero image" width={140} height={140} />
          </div>
          <h1 className="normal-name">Victor M. Herrera</h1>
          <p className="normal-role">{lang === "en" ? "Full Stack Developer" : "Desarrollador Full Stack"}</p>

          <p className="normal-summary">
            {lang === "en"
              ? "Software developer with hands-on experience in front-end and back-end development, including JavaScript (React, Node), HTML, CSS and SQL. I enjoy creating useful tools and polished UI experiences."
              : "Desarrollador de software con experiencia práctica en desarrollo front-end y back-end, incluyendo JavaScript (React, Node), HTML, CSS y SQL. Disfruto crear herramientas útiles y experiencias de interfaz pulidas."}
          </p>

          <div className="normal-links">
            <a href="https://github.com/VictorM-Herrera" target="_blank" rel="noreferrer" className="social-btn github">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/victor-maximiliano-herrera/"
              target="_blank"
              rel="noreferrer"
              className="social-btn linkedin"
            >
              LinkedIn
            </a>
            <a href="mailto:victormherrerac14@gmail.com" className="social-btn email">
              Email
            </a>
          </div>
        </aside>

        <main className="normal-main">
          {/* EXPERIENCE */}
          <section className="normal-section">
            <h2 className="normal-section-title">{lang === "en" ? "Experience" : "Experiencia"}</h2>

            <div className="timeline-item">
              <div className="timeline-header">
                <h3>{lang === "en" ? "Frontend Developer" : "Desarrollador Frontend"}</h3>
                <span className="timeline-date">{lang === "en" ? "feb 2023 – dec 2024" : "feb 2023 – dic 2024"}</span>
              </div>
              <p className="timeline-company">Universidad FASTA / Jr</p>
              <ul className="timeline-list">
                <li>
                  {lang === "en"
                    ? "I developed internal web applications for university staff, focused on streamlining administrative processes and improving user experience across different devices."
                    : "Desarrollé aplicaciones web internas para el personal universitario, enfocadas en optimizar procesos administrativos y mejorar la experiencia de usuario en distintos dispositivos."}
                </li>
                <li>
                  {lang === "en"
                    ? "I primarily used JavaScript (React, Angular, Node.js) and occasionally PHP, applying agile development practices, integrating external services through REST APIs, and deploying PWAs for mobile access."
                    : "Utilicé principalmente JavaScript (React, Angular, Node.js) y ocasionalmente PHP, aplicando prácticas de desarrollo ágil, integrando servicios externos mediante APIs REST y desplegando PWAs para acceso móvil."}
                </li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-header">
                <h3>{lang === "en" ? "Full Stack Developer" : "Desarrollador Full Stack"}</h3>
                <span className="timeline-date">{lang === "en" ? "2024 – Present" : "2024 – Actualidad"}</span>
              </div>
              <p className="timeline-company">
                {lang === "en" ? "Freelance / Personal projects" : "Freelance / Proyectos personales"}
              </p>
              <ul className="timeline-list">
                <li>
                  {lang === "en"
                    ? "Built internal tools and portfolio projects using React, Next.js and Node.js."
                    : "Desarrollé herramientas internas y proyectos de portafolio utilizando React, Next.js y Node.js."}
                </li>
                <li>
                  {lang === "en"
                    ? "Integrated REST APIs, authentication and deployed apps to production."
                    : "Integré APIs REST, autenticación y desplegué aplicaciones en producción."}
                </li>
              </ul>
            </div>
          </section>
          {/* EDUCATION */}
          <section className="normal-section">
            <h2 className="normal-section-title">{lang === "en" ? "Education" : "Educación"}</h2>

            <div className="timeline-item">
              <div className="timeline-header">
                <h3>
                  {lang === "en"
                    ? "Programming / Computer Science studies"
                    : "Estudios en Programación / Tecnicatura Universitaria en Programación"}
                </h3>
                <span className="timeline-date">{lang === "en" ? "mar 2023 – Present" : "mar 2023 – Actualidad"}</span>
              </div>
              <p className="timeline-company">UTN · Udemy · Bootcamps</p>
              <ul className="timeline-list">
                <li>
                  {lang === "en"
                    ? "Focus on algorithms, OOP, databases and web development with JavaScript and Java."
                    : "Enfoque en algoritmos, programación orientada a objetos, bases de datos y desarrollo web con JavaScript y Java."}
                </li>
                <li>Java, Spring, PHP, MySQL, JavaScript, Angular, React, NodeJS, Express.</li>
              </ul>
            </div>
          </section>

          {/* SKILLS */}
          <section className="normal-section">
            <h2 className="normal-section-title">{lang === "en" ? "Skills" : "Habilidades"}</h2>

            <div className="skills-groups">
              <div>
                <h3 className="skills-group-title">Frontend</h3>
                <ul className="skills-list">
                  <li className="skill-pill">React</li>
                  <li className="skill-pill">Next.js</li>
                  <li className="skill-pill">TypeScript</li>
                  <li className="skill-pill">HTML</li>
                  <li className="skill-pill">CSS / Tailwind</li>
                  <li className="skill-pill">Angular</li>
                  <li className="skill-pill">JavaFX</li>
                </ul>
              </div>

              <div>
                <h3 className="skills-group-title">Backend</h3>
                <ul className="skills-list">
                  <li className="skill-pill">Node.js</li>
                  <li className="skill-pill">Express</li>
                  <li className="skill-pill">Spring</li>
                  <li className="skill-pill">REST APIs</li>
                </ul>
              </div>

              <div>
                <h3 className="skills-group-title">
                  {lang === "en" ? "Databases & Tools" : "Bases de datos y herramientas"}
                </h3>
                <ul className="skills-list">
                  <li className="skill-pill">MySQL</li>
                  <li className="skill-pill">MongoDB</li>
                  <li className="skill-pill">Git / GitHub</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}
