
'use client'
import React from "react";
import "./Navbar.css";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContex";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const {lang} = useLanguage();
  const pathname = usePathname();

  
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <Link href={'/'} className="link-title">
        <h1 className={`navbar-title`} title="Home">
          Portfolio Booster Pack
        </h1>
        
        </Link>
      </div>

      <div className="navbar-bottom">
        <a className="nav-link" href={lang==='en'?"/VictorM-Herrera-eng.pdf":"/VictorM-Herrera.pdf"} download>
        {lang === 'en'? 'Download CV': 'Descargar CV'}
        </a>
        <span className="divider"></span>

        <Link className="nav-link" href={pathname === "/contact" ? "/" : "/contact"}>
        {pathname==="/contact" ? (lang ==='en' ? 'Home' : 'Inicio') : (lang === 'en' ? 'Contact me' : 'Contáctame')}
        </Link>
        <span className="divider"></span>

        <Link className="nav-link" href={pathname === "/projects" ? "/" : "/projects"}>
        {pathname==="/projects" ? (lang ==='en' ? 'Home' : 'Inicio') : (lang === 'en'? "My Projects": "Mis Proyectos")}
        
        </Link>
        <span className="divider"></span>

        <Link className="nav-link" href={pathname === "/collection" ? "/" : "/collection"}>
        {pathname==="/collection" ? (lang ==='en' ? 'Home' : 'Inicio') : (lang === 'en'? "See Collection" : 'Ver Colección')}
        </Link>
      </div>
    </nav>
  );
}
