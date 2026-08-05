"use client";
import React, { useRef, useState } from "react";
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

function getCardSize(step) {
  if (step === 0) return { width: 350, height: 530 };
  if (step === 1) return { width: 270, height: 400 };
  return { width: 200, height: 300 };
}

function OverlayCardImage({ card, step, index }) {
  const [loaded, setLoaded] = useState(false);
  const { width, height } = getCardSize(step);

  return (
    <div
      className={`card-frame card-frame-${step} ${loaded ? "is-loaded" : ""}`}
      style={{
        "--card-width": `${width}px`,
        "--card-height": `${height}px`,
      }}
    >
      <Image
        src={card}
        alt={step === 2 ? `skill card ${index + 1}` : "portfolio card"}
        width={width}
        height={height}
        className={`card-image-${step}`}
        draggable={false}
        loading={step === 0 ? undefined : "lazy"}
        priority={step === 0}
        sizes={
          step === 2
            ? "(max-width: 768px) 42vw, 200px"
            : "(max-width: 520px) 86vw, (max-height: 700px) 46vh, 350px"
        }
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default function CardsOverlay({ showOverlay }) {
  const { lang } = useLanguage();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [tooltip, setTooltip] = useState(null);
  const scrollRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleContinue = () => {
    if (step === 2) {
      router.push("/collection");
      return;
    }
    setStep((s) => Math.min(s + 1, 2));
  };

  const handleEnter = (card, info) => {
    if (!info) return;

    setTooltip({ card, info });
  };

  function reset() {
    setTooltip(null);
  }

  const startDrag = (e) => {
    if (step !== 2 || e.button > 0) return;

    const el = scrollRef.current;
    if (!el) return;

    dragRef.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
    };

    setIsDragging(true);
    el.setPointerCapture?.(e.pointerId);
  };

  const moveDrag = (e) => {
    if (!dragRef.current.active) return;

    const el = scrollRef.current;
    if (!el) return;

    const walk = e.clientX - dragRef.current.startX;
    el.scrollLeft = dragRef.current.scrollLeft - walk;
    e.preventDefault();
  };

  const stopDrag = (e) => {
    if (!dragRef.current.active) return;

    dragRef.current.active = false;
    setIsDragging(false);
    scrollRef.current?.releasePointerCapture?.(e.pointerId);
  };

  return showOverlay ? (
    <div className="overlay">
      <h1 className="overlay-title">{getTitleByStep(step, lang)}</h1>

      <div
        ref={scrollRef}
        className={`card-scroll-wrapper ${step === 2 ? "is-draggable" : ""} ${isDragging ? "is-dragging" : ""}`}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onPointerLeave={stopDrag}
      >
        <div key={step} className={`card-section step-${step}`}>
          {getCardsByStep(step, lang).map((card, index) => {
            const info = getTooltip(step, lang, index);

            return (
              <div
                key={card.src || index}
                className="card-wrapper flip-in"
                onMouseEnter={() => handleEnter(card, info)}
                onMouseLeave={reset}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <OverlayCardImage card={card} step={step} index={index} />

                {tooltip?.card === card && tooltip.info && (
                  <div className="tooltip">
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
