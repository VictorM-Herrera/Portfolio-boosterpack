'use client'
import React from 'react'
import './Footer.css'
import Image from 'next/image'
import { useLanguage } from '@/app/context/LanguageContex';

export default function Footer() {

  const { lang, toggleLanguage } = useLanguage();
  return (
    <>
    <div className='footer'>
        Victor M. Herrera
    </div>
    <div className='language'>
      <p>
        {lang === 'en' ? 'Change to' : "Cambiar a"}
      </p>
      {lang === 'en' ?
      <Image
      width={20}
      height={20}
      alt='USA'
      src={'/icons/spain.png'}
      onClick={toggleLanguage}
      title='Spanish'
      />
      :
      <Image
      width={20}
      height={20}
      alt='USA'
      src={'/icons/usa.png'}
      onClick={toggleLanguage}
      title='Ingles'
      />
      }
      
      
    </div>
    </>
  )
}
