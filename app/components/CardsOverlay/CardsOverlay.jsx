"use client";
import React, { useState } from "react";
import "./Overlay.css";
import { useLanguage } from "@/app/context/LanguageContex";
import Image from "next/image";
import { useRouter } from "next/navigation";

// 🔹 Imports estáticos desde /public
import skill1 from "@/public/cards/skill_(1).png";
import skill2 from "@/public/cards/skill_(2).png";
import skill3 from "@/public/cards/skill_(3).png";
import skill4 from "@/public/cards/skill_(4).png";
import skill5 from "@/public/cards/skill_(5).png";
import skill6 from "@/public/cards/skill_(6).png";
import skill7 from "@/public/cards/skill_(7).png";
import skill8 from "@/public/cards/skill_(8).png";
import skill9 from "@/public/cards/skill_(9).png";

import educationCard from "@/public/cards/education.png";
import experienceCard from "@/public/cards/experience.png";

import legendaryDev from "@/public/cards/legendary_dev.png";
import legendaryDevEsp from "@/public/cards/legendary_dev_esp.png";

// 🔹 Arrays ahora usan los imports
const skillCards = [
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9,
];

const expCards = [educationCard, experienceCard];
const legendaryCard = [legendaryDev];
const legendaryCardEsp = [legendaryDevEsp];

function getCardsByStep(step, lang) {
  if (step === 0) return lang === "en" ? legendaryCard : legendaryCardEsp;
  if (step === 1) return expCards;
  return skillCards;
}

function getTitleByStep(step, lang) {
  if (step === 0) {
    return lang === "en" ? "Legendary Developer" : "Desarrollador Legendario";
  }
  if (step === 1) {
    return lang === "en" ? "Education / Experience" : "Educación / Experiencia";
  }
  return lang === "en" ? "Skills" : "Habilidades";
}

const educationExperienceTooltips = {
  en: [
    {
      title: "Programming Technician",
      subtitle: "UTN · Mar 2023 – Present",
      body: "Advanced C, Java/Spring, PHP & MySQL.",
    },
    {
      title: "Frontend Developer",
      subtitle: "Universidad FASTA · Feb 2023 – Dec 2024",
      body: "Developed internal web apps for staff, focusing on improving UX and streamlining administrative tasks. Used JavaScript (React, Angular, Node.js) and some PHP. REST APIs and PWAs.",
    },
  ],
  es: [
    {
      title: "Tecnicatura Universitaria en Programación",
      subtitle: "UTN · Mar 2023 – Actualidad",
      body: "C y C avanzado, Java/Spring, PHP y MySQL.",
    },
    {
      title: "Desarrollador Frontend",
      subtitle: "Universidad FASTA · Feb 2023 – Dic 2024",
      body: "Desarrollé apps web internas para el personal universitario, enfocadas en agilizar trámites y mejorar la experiencia de uso. Usé JavaScript (React, Angular, Node.js) y algo de PHP. APIs REST y PWAs.",
    },
  ],
};

function getTooltip(step, lang, index) {
  if (step !== 1) return null;
  const key = lang === "en" ? "en" : "es";
  return educationExperienceTooltips[key][index] || null;
}

export default function CardsOverlay({ showOverlay }) {
  const { lang } = useLanguage();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [tooltip, setTooltip] = useState(null);

  const handleContinue = () => {
    if (step === 2) {
      router.push("/collection");
      return;
    }
    setStep((s) => Math.min(s + 1, 2));
  };

  const handleMove = (e, card, info) => {
    if (!info) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setTooltip({ card, x, y, info });
  };

  function reset() {
    setTooltip(null);
  }

  return showOverlay ? (
    <div className="overlay">
      <h1 className="overlay-title">{getTitleByStep(step, lang)}</h1>

      <div className="card-scroll-wrapper">
        <div key={step} className={`card-section step-${step}`}>
          {getCardsByStep(step, lang).map((card, index) => {
            const info = getTooltip(step, lang, index);

            return (
              <div
                key={card.src || index}
                className="card-wrapper flip-in"
                onMouseEnter={(e) => handleMove(e, card, info)}
                onMouseMove={(e) => handleMove(e, card, info)}
                onMouseLeave={reset}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <Image
                  src={card}
                  alt={typeof card === "string" ? card : "card"}
                  width={step === 2 ? 200 : 350}
                  height={step === 2 ? 300 : 530}
                  className={`card-image-${step}`}
                  priority={index < 2}
                />

                {tooltip?.card === card && tooltip.info && (
                  <div
                    className="tooltip"
                    style={{
                      left: tooltip.x + 12,
                      top: tooltip.y + 12,
                    }}
                  >
                    <div className="tooltip-title">{tooltip.info.title}</div>
                    <div className="tooltip-subtitle">{tooltip.info.subtitle}</div>
                    <p className="tooltip-body">{tooltip.info.body}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button className="overlay-button" onClick={handleContinue}>
        {lang === "en"
          ? step === 2
            ? "See Collection"
            : "Go Next"
          : step === 2
          ? "Ver Coleccion"
          : "Continuar"}
      </button>
    </div>
  ) : (
    <div className="hide"></div>
  );
}