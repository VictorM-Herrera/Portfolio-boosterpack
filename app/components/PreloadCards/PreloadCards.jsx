"use client";
import { useEffect } from "react";

const WARMUP_IMAGES = [
  "/cards/legendary_dev.png",
  "/cards/legendary_dev_esp.png",
  "/cards/education.png",
  "/cards/experience.png",
  "/cards/skill_(1).png",
  "/cards/skill_(2).png",
  "/cards/skill_(3).png",
  "/cards/skill_(4).png",
  "/cards/skill_(5).png",
  "/cards/skill_(6).png",
  "/cards/skill_(7).png",
  "/cards/skill_(8).png",
  "/cards/skill_(9).png",
  "/hero_image.png",
];


export default function PreloadCards() {
  useEffect(() => {
    WARMUP_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.decoding = "async";
      img.loading = "eager";
      img.src = src;
    });
  }, []);
  return null;
}