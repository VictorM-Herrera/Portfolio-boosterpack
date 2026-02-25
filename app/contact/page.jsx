"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { useLanguage } from "@/app/context/LanguageContex";
import { useToast } from "../context/ToastContext";

export default function Contact() {
  const { showToast } = useToast();
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const { lang } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("ok");
        showToast(lang === "en" ? "Message sent successfully!" : "Mensaje enviado correctamente", "success");
        formRef.current.reset();
      })
      .catch(() => {
        showToast(lang === "en" ? "Error sending message" : "Error al enviar el mensaje", "error");
        setStatus("error");
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-section">
        <h2>{lang === "en" ? "CONTACT ME" : "CONTACTAME"}</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mail-section">
            <input type="email" name="from_email" required placeholder={lang === "en" ? "Your E-mail" : "Tu Email"} />
          </div>
          <div className="mail-section">
            <input type="text" name="subject" required placeholder={lang === "en" ? "Subject" : "Asunto"} />
          </div>
          <div className="message-section">
            <textarea name="message" required id=""></textarea>
          </div>
          <button className="send-button" type="submit" disabled={sending}>
            {sending ? (lang === "en" ? "Sending..." : "Enviando...") : lang === "en" ? "Send" : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}
