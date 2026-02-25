'use client'
import React, { useState } from 'react'
import CollectionSection from '../components/CollectionSection/CollectionSection'
import NormalPortfolio from '../components/NormalPortfolio/NormalPortfolio';

export default function Collection() {
    const [view, setView] = useState("cards");
  
   return view === 'cards' ? 
   (<CollectionSection view={view} setView={setView}/>)
   :
   (<NormalPortfolio view={view}  setView={setView}/>)

}
