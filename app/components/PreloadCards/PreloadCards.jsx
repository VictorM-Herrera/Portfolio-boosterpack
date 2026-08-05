"use client";
import { useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContex";

function scheduleIdle(callback, timeout = 1200) {
  if ("requestIdleCallback" in window) {
    return window.requestIdleCallback(callback, { timeout });
  }

  return window.setTimeout(callback, timeout);
}

function cancelIdle(id) {
  if ("cancelIdleCallback" in window) {
    window.cancelIdleCallback(id);
    return;
  }

  window.clearTimeout(id);
}

function warmImage(src) {
  const img = new window.Image();
  img.decoding = "async";
  img.src = src;
}

export default function PreloadCards() {
  const { lang } = useLanguage();

  useEffect(() => {
    const firstCard = lang === "en" ? "/cards/legendary_dev.png" : "/cards/legendary_dev_esp.png";
    const idleIds = [];
    const timeoutIds = [];

    [firstCard].forEach((src, index) => {
      const timeoutId = window.setTimeout(() => {
        const idleId = scheduleIdle(() => warmImage(src), 900);
        idleIds.push(idleId);
      }, index * 220);

      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach(window.clearTimeout);
      idleIds.forEach(cancelIdle);
    };
  }, [lang]);

  return null;
}
