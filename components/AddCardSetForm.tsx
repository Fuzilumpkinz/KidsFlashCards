"use client"

import { useState } from "react"

export default function AddCardSetForm({ addCardSet }) {
  const [name, setName] = useState("")
  const [cards, setCards] = useState([{ question: "", answer: "" }])

  const handleSubmit = (e) => {
    e.preventDefault()
    addCardSet({ name, cards })
    setName("")
    setCards([{ question: "", answer: "" }])
  }

  const addCard = () => {
    setCards([...cards, { question: "", answer: "" }])
  }

  const updateCard = (index, field, value) => {
    const updatedCards = [...cards]
    updatedCards[index][field] = value
    setCards(updatedCards)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Add Custom Card Set</h3>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Set Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border rounded px-2 py-1"
        />
      </div>
      {cards.map((card, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-semibold">Card {index + 1}</h4>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Question"
              value={card.question}
              onChange={(e) => updateCard(index, "question", e.target.value)}
              required
              className="flex-1 border rounded px-2 py-1"
            />
            <input
              type="text"
              placeholder="Answer"
              value={card.answer}
              onChange={(e) => updateCard(index, "answer", e.target.value)}
              required
              className="flex-1 border rounded px-2 py-1"
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addCard}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
      >
        Add Card
      </button>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Save Card Set
      </button>
    </form>
  )
}

