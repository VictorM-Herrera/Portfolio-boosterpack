"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "./Booster.css";
import { useLanguage } from "@/app/context/LanguageContex";
import CardsOverlay from "../CardsOverlay/CardsOverlay";

export default function Boosterpack() {
  const { lang } = useLanguage();
  const boxRef = useRef(null);
  const topRef = useRef(null);

  const [phase, setPhase] = useState("idle"); // idle || shake || open
  const [isOpened, setIsOpened] = useState(false);

  const [showOverlay, setShowOverlay] = useState(false);

  function handleMouseMove(e) {
    if (phase !== "idle" || isOpened) return;

    const box = boxRef.current;
    if (!box) return;

    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    box.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;

    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    box.style.setProperty("--mx", `${px}%`);
    box.style.setProperty("--my", `${py}%`);
  }

  function reset() {
    if (phase !== "idle" || isOpened) return;

    const box = boxRef.current;
    if (!box) return;

    box.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    box.style.setProperty("--mx", "50%");
    box.style.setProperty("--my", "50%");
  }

  const handleClick = () => {
    if (phase !== "idle" || isOpened) return;

    const box = boxRef.current;
    if (box) {
      box.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
      box.style.setProperty("--mx", "50%");
      box.style.setProperty("--my", "50%");
    }

    setPhase("shake");

    setTimeout(() => setPhase("open"), 140);

    const top = topRef.current;
    if (!top) return;

    setTimeout(() => {
      top.style.opacity = "1";
      top.style.transition = "transform 0.65s cubic-bezier(.16, 1, .3, 1)";
      top.style.transform = "rotateY(-160deg) rotateX(20deg)";
    }, 140);

    setTimeout(() => {
      top.style.transition = "transform 0.45s cubic-bezier(.2,.9,.2,1), opacity 0.35s ease";
      top.style.transform = "rotateY(-160deg) rotateX(20deg) translateX(-140px)";
      top.style.opacity = "0";
      setIsOpened(true);

      setTimeout(() => {
        setShowOverlay(true);
      }, 300);
    }, 140 + 140);
  };


  return (
    <>
      <div
        className={`booster-container ${phase}`}
        ref={boxRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        onClick={handleClick}
      >
        <div className="pack-light" />

        <div className="booster-top" ref={topRef}>
          <Image src={"/booster/1234.png"} alt="" width={280} height={55} priority/>
        </div>

        <div className="booster-bottom">
          <Image src={"/booster/12345.png"} alt="booster" width={280} height={500} priority/>
        </div>
      </div>
      <CardsOverlay showOverlay={showOverlay}/>
    </>
  );
}
