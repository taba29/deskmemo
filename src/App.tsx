import { sampleMemos } from "./data/sampleMemos"

function App() {
  const firstMemo = sampleMemos[0]

  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="app-title">DeskMemo</h1>

        <ul className="memo-list">
          {sampleMemos.map((memo) => (
            <li key={memo.id} className="memo-item">
              <h2>{memo.title}</h2>
              <p>{memo.content}</p>
            </li>
          ))}
        </ul>
      </aside>

      <main className="content">
        <div className="preview-box">
          <h2 className="preview-title">{firstMemo.title}</h2>
          <p>{firstMemo.content}</p>
        </div>
      </main>
    </div>
  )
}

export default App