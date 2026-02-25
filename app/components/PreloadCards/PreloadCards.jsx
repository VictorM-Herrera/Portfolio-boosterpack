"use client";
import { useEffect } from "react";

const PRELOAD_MAIN = [
  "/cards/legendary_dev.png",
  "/cards/legendary_dev_esp.png",
  "/cards/education.png",
  "/cards/experience.png",
];

const PRELOAD_SKILLS = [
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

export default function PreloadCards() {
  useEffect(() => {
    PRELOAD_MAIN.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const loadSkills = () => {
      PRELOAD_SKILLS.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    let idleId = null;
    let timeoutId = null;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadSkills);
    } else {
      timeoutId = setTimeout(loadSkills, 800);
    }

    return () => {
      if (idleId && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return null;
}