"use client"

import { useState, useEffect } from "react"
import FlashCardSet from "./FlashCardSet"
import Navigation from "./Navigation"
import AddCardSetForm from "./AddCardSetForm"
import CustomSets from "./CustomSets"
import { preloadedCardSets } from "../data/preloadedCardSets"

export default function FlashCardApp() {
  const [grade, setGrade] = useState("kindergarten")
  const [subject, setSubject] = useState("numbers")
  const [cardSets, setCardSets] = useState(preloadedCardSets)
  const [customSets, setCustomSets] = useState([])
  const [activeSet, setActiveSet] = useState(null)
  const [isCustomSetActive, setIsCustomSetActive] = useState(false)

  useEffect(() => {
    if (cardSets[grade] && cardSets[grade][subject] && cardSets[grade][subject].length > 0) {
      setActiveSet(cardSets[grade][subject][0])
      setIsCustomSetActive(false)
    } else {
      setActiveSet(null)
    }
  }, [grade, subject, cardSets])

  const addCardSet = (newSet) => {
    setCustomSets((prevCustomSets) => [...prevCustomSets, newSet])
  }

  const selectCardSet = (set, isCustom = false) => {
    setActiveSet(set)
    setIsCustomSetActive(isCustom)
  }

  const selectGradeSubject = (newGrade, newSubject) => {
    setGrade(newGrade)
    setSubject(newSubject)
    setIsCustomSetActive(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Kids Flash Cards</h1>
      <Navigation
        grade={grade}
        subject={subject}
        setGradeSubject={selectGradeSubject}
        cardSets={cardSets}
        selectCardSet={selectCardSet}
        isCustomSetActive={isCustomSetActive}
      />
      {activeSet ? (
        <FlashCardSet activeSet={activeSet} />
      ) : (
        <p className="text-center text-xl mt-8">No flash cards available for this selection.</p>
      )}
      <AddCardSetForm addCardSet={addCardSet} />
      <CustomSets customSets={customSets} selectCardSet={selectCardSet} />
    </div>
  )
}

