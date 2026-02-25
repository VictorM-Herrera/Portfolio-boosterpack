"use client";
import React, { useEffect, useRef } from "react";
import "./Collection.css";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContex";

const skillCards = [
  "/cards/skill_(1).png",
  "/cards/skill_(2).png",
  "/cards/skill_(3).png",
  "/cards/skill_(4).png",
  "/cards/skill_(5).png",
  "/cards/skill_(6).png",
  "/cards/skill_(7).png",
  "/cards/skill_(8).png",
  "/cards/skill_(9).png",
];

export default function CollectionSection({ view, setView }) {
  const snapRef = useRef(null);
  const { lang } = useLanguage();
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");

    const apply = () => {
      const isMobile = mq.matches;

      document.body.classList.toggle("no-body-scroll", !isMobile);

      if (!isMobile) {
        if (snapRef.current) snapRef.current.scrollTo({ top: 0, behavior: "auto" });
        window.scrollTo({ top: 0, behavior: "auto" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    };

    apply();
    mq.addEventListener?.("change", apply);

    return () => {
      mq.removeEventListener?.("change", apply);
      document.body.classList.remove("no-body-scroll");
    };
  }, []);
  return (
    <div className="collection-wrapper">
      <section className="collection-page">
        <div className="view-toggle">
          <button className={view === "cards" ? "active" : ""} onClick={() => setView("cards")}>
            {lang === "en" ? "Cards" : "Cartas"}
          </button>
          <button className={view === "classic" ? "active" : ""} onClick={() => setView("classic")}>
            {lang === "en" ? "Classic" : "Clasico"}
          </button>
        </div>

        <div className="collection-snap" ref={snapRef}>
          <section className="snap-section">
            <div className="collection-section">
              <div className="collection-card-area">
                <div className="spin-card">
                  <div className="spin-card-inner">
                    <div className="spin-card-front">
                      <Image
                        src={lang === "en" ? "/cards/legendary_dev.png" : "/cards/legendary_dev_esp.png"}
                        alt="developer img"
                        width={282}
                        height={397}
                      />
                    </div>
                    <div className="spin-card-back">
                      <Image
                        src={lang === "en" ? "/cards/legendary_dev.png" : "/cards/legendary_dev_esp.png"}
                        alt="developer img"
                        width={282}
                        height={397}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="collection-text-area">
                <h2>Victor M. Herrera</h2>
                <h3>{lang === "en" ? "Full Stack Developer" : "Desarrollador Full Stack"}</h3>
                <p>
                  {lang === "en"
                    ? "Software developer with hands-on experience in front-end and backend development, including JavaScript (React, Node), HTML, CSS. I excel at working in team environments and am quick to learn and adapt to new technologies. Currently open to Front-End or Full Stack opportunities."
                    : "Desarrollador de software con experiencia práctica en desarrollo front-end y back-end, incluyendo JavaScript (React, Node), HTML y CSS. Destaco en el trabajo en equipo y tengo una rápida capacidad para aprender y adaptarme a nuevas tecnologías. Actualmente abierto a oportunidades como Front-End o Full Stack."}
                </p>
              </div>
            </div>
          </section>
          {/* EXPERIENCE */}
          <section className="snap-section">
            <div className="collection-section reverse">
              <div className="collection-card-area">
                <div className="spin-card">
                  <div className="spin-card-inner">
                    <div className="spin-card-front">
                      <Image src={"/cards/experience.png"} alt="experience img" width={282} height={397} />
                    </div>
                    <div className="spin-card-back">
                      <Image src={"/cards/experience.png"} alt="experience img" width={282} height={397} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="collection-text-area">
                <h2>{lang === "en" ? "Experience" : "Experiencia"}</h2>
                <p>
                  {lang === "en"
                    ? "U. FASTA · Front End Developer · feb 2023 - dec 2024"
                    : "U. FASTA · Desarrollador Frontend · feb 2023 - dic 2024"}
                </p>
                <ul>
                  <li>
                    {lang === "en"
                      ? "I developed internal web applications for university staff, focused on streamlining administrative processes and improving user experience across different devices."
                      : "Desarrollé aplicaciones web internas para el personal universitario, enfocadas en agilizar trámites administrativos y mejorar la experiencia de uso en diferentes dispositivos."}
                  </li>
                  <li>JavaScript (React,angular,node), PHP.</li>
                </ul>
              </div>
            </div>
          </section>
          {/* EDUCATION */}
          <section className="snap-section">
            <div className="collection-section">
              <div className="collection-card-area">
                <div className="spin-card">
                  <div className="spin-card-inner">
                    <div className="spin-card-front">
                      <Image src={"/cards/education.png"} alt="education img" width={282} height={397} />
                    </div>
                    <div className="spin-card-back">
                      <Image src={"/cards/education.png"} alt="education img" width={282} height={397} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="collection-text-area">
                <h2>{lang === "en" ? "Education" : "Educación"}</h2>
                <p>UTN · Mar 2023 - {lang === "en" ? "Today" : "Actualidad"}</p>
                <ul>
                  <li>
                    {lang === "en"
                      ? "University technical degree in programming"
                      : "Tecnicatura Universitaria en Programación"}
                  </li>
                  <li>C, Java, Spring, PHP, Mysql.</li>
                </ul>
              </div>
            </div>
          </section>
          {/* SKILLS */}
          <section className="snap-section">
            <div className="collection-section column">
              <h2 className="skills-title">{lang === "en" ? "Skills" : "Habilidades"}</h2>

              <div className="skills-row">
                {skillCards.map((src) => (
                  <div className="skill-card" key={src}>
                    <div className="spin-card-skill">
                      <div className="spin-card-inner">
                        <div className="spin-card-front">
                          <Image src={src} alt="skill" width={220} height={308} draggable={false} priority={false} />
                        </div>
                        <div className="spin-card-back">
                          <Image src={src} alt="skill" width={220} height={308} draggable={false} priority={false} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
