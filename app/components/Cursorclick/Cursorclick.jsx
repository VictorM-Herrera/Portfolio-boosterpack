'use client'
import React from 'react'
import './Cursorclick.css'
import Image from 'next/image'
import { useLanguage } from '@/app/context/LanguageContex'

export default function Cursorclick() {
  const {lang} = useLanguage();
  return (
    <div className="cursor-container">
      <Image
        src="/icons/cursor_1.png"
        width={120}
        height={120}
        alt="Click icon"
        className="cursor-icon"
      />
      <span className="cursor-label">{lang==='en'?'Click to open':'Presiona para abrir'}</span>
    </div>
  )
}
