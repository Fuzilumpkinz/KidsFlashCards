export default function CustomSets({ customSets, selectCardSet }) {
  if (customSets.length === 0) {
    return null
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Custom Card Sets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customSets.map((set, index) => (
          <button
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-50 transition-colors"
            onClick={() => selectCardSet(set, true)}
          >
            <h3 className="font-semibold">{set.name}</h3>
            <p className="text-sm text-gray-600">{set.cards.length} cards</p>
          </button>
        ))}
      </div>
    </div>
  )
}

