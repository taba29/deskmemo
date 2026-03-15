import { useMemo, useState } from "react"
import { sampleMemos } from "./data/sampleMemos"

function App() {
  const [memos, setMemos] = useState(sampleMemos)
  const [selectedMemoId, setSelectedMemoId] = useState(sampleMemos[0].id)

  const selectedMemo = useMemo(() => {
    return memos.find((memo) => memo.id === selectedMemoId) ?? memos[0]
  }, [memos, selectedMemoId])

  const handleTitleChange = (value: string) => {
    setMemos((prev) =>
      prev.map((memo) =>
        memo.id === selectedMemoId
          ? { ...memo, title: value, updatedAt: new Date().toISOString() }
          : memo
      )
    )
  }

  const handleContentChange = (value: string) => {
    setMemos((prev) =>
      prev.map((memo) =>
        memo.id === selectedMemoId
          ? { ...memo, content: value, updatedAt: new Date().toISOString() }
          : memo
      )
    )
  }

  if (!selectedMemo) {
    return <div>メモがありません</div>
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="app-title">DeskMemo</h1>

        <ul className="memo-list">
          {memos.map((memo) => (
            <li
              key={memo.id}
              className={`memo-item ${memo.id === selectedMemoId ? "active" : ""}`}
              onClick={() => setSelectedMemoId(memo.id)}
            >
              <h2>{memo.title || "無題"}</h2>
              <p>{memo.content || "本文なし"}</p>
            </li>
          ))}
        </ul>
      </aside>

      <main className="content">
        <div className="preview-box">
          <input
            className="title-input"
            value={selectedMemo.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="タイトル"
          />

          <textarea
            className="content-input"
            value={selectedMemo.content}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder="本文"
          />
        </div>
      </main>
    </div>
  )
}

export default App