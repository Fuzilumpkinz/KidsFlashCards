export default function Navigation({ grade, subject, setGradeSubject, cardSets, selectCardSet, isCustomSetActive }) {
  const grades = ["kindergarten", "first", "second", "third", "fourth", "fifth", "custom"]
  const subjects = ["numbers", "words", "addition", "subtraction", "multiplication", "division"]

  const handleGradeChange = (e) => {
    const newGrade = e.target.value
    if (newGrade === "custom") {
      selectCardSet(null, true)
    } else {
      setGradeSubject(newGrade, subject)
    }
  }

  const handleSubjectChange = (e) => {
    const newSubject = e.target.value
    setGradeSubject(grade, newSubject)
  }

  const handleSetChange = (e) => {
    const setIndex = Number.parseInt(e.target.value)
    selectCardSet(cardSets[grade][subject][setIndex])
  }

  return (
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
      <select
        value={isCustomSetActive ? "custom" : grade}
        onChange={handleGradeChange}
        className="border rounded px-2 py-1"
      >
        {grades.map((g) => (
          <option key={g} value={g}>
            {g === "custom" ? "Custom Lists" : `${g.charAt(0).toUpperCase() + g.slice(1)} Grade`}
          </option>
        ))}
      </select>
      {!isCustomSetActive && (
        <>
          <select value={subject} onChange={handleSubjectChange} className="border rounded px-2 py-1">
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
          {cardSets[grade] && cardSets[grade][subject] && (
            <select onChange={handleSetChange} className="border rounded px-2 py-1">
              {cardSets[grade][subject].map((set, index) => (
                <option key={index} value={index}>
                  {set.name}
                </option>
              ))}
            </select>
          )}
        </>
      )}
    </div>
  )
}

