import { useState } from "react"
import { sampleMemos } from "./data/sampleMemos"

function App() {
  const [selectedMemoId, setSelectedMemoId] = useState(sampleMemos[0].id)

  const selectedMemo =
    sampleMemos.find((memo) => memo.id === selectedMemoId) ?? sampleMemos[0]

  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="app-title">DeskMemo</h1>

        <ul className="memo-list">
          {sampleMemos.map((memo) => (
            <li
              key={memo.id}
              className={`memo-item ${memo.id === selectedMemoId ? "active" : ""}`}
              onClick={() => setSelectedMemoId(memo.id)}
            >
              <h2>{memo.title}</h2>
              <p>{memo.content}</p>
            </li>
          ))}
        </ul>
      </aside>

      <main className="content">
        <div className="preview-box">
          <h2 className="preview-title">{selectedMemo.title}</h2>
          <p>{selectedMemo.content}</p>
        </div>
      </main>
    </div>
  )
}

export default App