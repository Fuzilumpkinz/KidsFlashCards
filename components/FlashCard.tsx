"use client"

import { useState } from "react"

export default function FlashCard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="flex justify-center items-center h-[400px]">
      <div className="relative w-[300px] h-[200px] cursor-pointer" onClick={flipCard}>
        <div
          className={`absolute w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute w-full h-full bg-white rounded-lg shadow-lg [backface-visibility:hidden] flex items-center justify-center p-4">
            <h3 className="text-xl font-semibold text-center break-words">{card.question}</h3>
          </div>
          <div className="absolute w-full h-full bg-blue-100 rounded-lg shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-4">
            <p className="text-xl font-semibold text-center break-words">{card.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

