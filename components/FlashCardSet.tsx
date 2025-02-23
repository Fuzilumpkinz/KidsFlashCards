"use client"

import { useState } from "react"
import FlashCard from "./FlashCard"

export default function FlashCardSet({ activeSet }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % activeSet.cards.length)
  }

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + activeSet.cards.length) % activeSet.cards.length)
  }

  return (
    <div className="my-8 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">{activeSet.name}</h2>
      <FlashCard card={activeSet.cards[currentCardIndex]} />
      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={prevCard} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Previous
        </button>
        <button onClick={nextCard} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Next
        </button>
      </div>
    </div>
  )
}

