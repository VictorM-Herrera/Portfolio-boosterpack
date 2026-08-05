"use client";
import React from "react";
import "./projects.css";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContex";

export default function Projects() {
  const { lang } = useLanguage();
  return (
    <div className="p-container">
      <h2 className="project-title">
        {lang === "en" ? "My Projects" : "Mis proyectos"}
      </h2>

      <div className="projects-section">
        {/* Xbox Games */}
        <div className="project">
          <p>"Xbox games" e-commerce</p>

          <div className="image-wrapper">
            <Image
              className="project-image"
              src="/projects/xboxgames.png"
              alt="Xbox Games"
              width={350}
              height={250}
            />

            <div className="picon-section">
              <a
                href="https://github.com/VictorM-Herrera/games-commerce"
                target="_blank"
              >
                <Image
                  src="/icons/github.png"
                  alt="github"
                  width={30}
                  height={30}
                  title={lang === "en" ? "View repo" : "Ir al repositorio"}
                />
              </a>
              <a href="https://games-commerce-nine.vercel.app/" target="_blank">
                <Image
                  src="/icons/external_link.png"
                  alt="live"
                  width={26}
                  height={26}
                  title={lang === "en" ? "View site" : "Ver la pagina"}
                />
              </a>
            </div>
          </div>
        </div>

        {/* DEVCOIN */}
        <div className="project">
          <p>"Dev-Coin" crypto-wallet</p>

          <div className="image-wrapper">
            <Image
              className="project-image"
              src="/projects/Dev-coin.png"
              alt="HiveRH"
              width={350}
              height={250}
            />

            <div className="picon-section">
              <a
                href="https://github.com/VictorM-Herrera/devCoin-front"
                target="_blank"
              >
                <Image
                  src="/icons/github.png"
                  alt="github"
                  width={30}
                  height={30}
                  title={lang === "en" ? "View repo" : "Ir al repositorio"}
                />
              </a>
              <a href="https://devcoin.calmfire.ar/" target="_blank">
                <Image
                  src="/icons/external_link.png"
                  alt="live"
                  width={26}
                  height={26}
                  title={lang === "en" ? "View site" : "Ver la pagina"}
                />
              </a>
            </div>
          </div>
        </div>

        {/* MMBOT */}
        <div className="project">
          <p>"MMBOT" discord-bot</p>

          <div className="image-wrapper">
            <Image
              className="project-image"
              src="/projects/MMBOT.png"
              alt="MMBOT"
              width={350}
              height={250}
            />

            <div className="picon-section">
              <a
                href="https://github.com/VictorM-Herrera/MMBOT"
                target="_blank"
              >
                <Image
                  src="/icons/github.png"
                  alt="github"
                  width={30}
                  height={30}
                  title={lang === "en" ? "View repo" : "Ir al repositorio"}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Calculadora FX */}
        <div className="project">
          <p>"Calculadora FX" Java-App</p>

          <div className="image-wrapper">
            <Image
              className="project-image"
              src="/projects/calc.png"
              alt="Calculadora FX"
              width={350}
              height={250}
            />

            <div className="picon-section">
              <a
                href="https://github.com/VictorM-Herrera/JavaFX-Calculator"
                target="_blank"
              >
                <Image
                  src="/icons/github.png"
                  alt="github"
                  width={30}
                  height={30}
                  title={lang === "en" ? "View repo" : "Ir al repositorio"}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="project">
          <p>"KanbanBoard" Js-project</p>

          <div className="image-wrapper">
            <Image
              className="project-image"
              src="/projects/kanbanboard.png"
              alt="Kanban Board"
              width={350}
              height={250}
            />

            <div className="picon-section">
              <a
                href="https://github.com/VictorM-Herrera/Kanban-board"
                target="_blank"
              >
                <Image
                  src="/icons/github.png"
                  alt="github"
                  width={30}
                  height={30}
                  title={lang === "en" ? "View repo" : "Ir al repositorio"}
                />
              </a>
              <a href="https://kanban-board-b7w7.vercel.app/" target="_blank">
                <Image
                  src="/icons/external_link.png"
                  alt="live"
                  width={26}
                  height={26}
                  title={lang === "en" ? "View site" : "Ver la pagina"}
                />
              </a>
            </div>
          </div>
        </div>

        {/* HiveRH BoosterPack */}
        <div className="project">
          <p>"HiveRH-API" Java-Springboot-project</p>

          <div className="image-wrapper">
            <Image
              className="project-image"
              src="/projects/hiverh.png"
              alt="HiveRH"
              width={350}
              height={250}
            />

            <div className="picon-section">
              <a href="https://github.com/VictorM-Herrera/HiveRH" target="_blank">
                <Image src="/icons/github.png" alt="github" width={30} height={30} title={lang === "en" ? "View repo" : "Ir al repositorio"} />
              </a>
              <a href="https://hiverh.calmfire.ar/swagger-ui/index.html" target="_blank">
                <Image src="/icons/external_link.png" alt="live" width={26} height={26} title={lang === "en" ? "View site" : "Ver la pagina"}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
