import type { Memo } from "../types/memo"

const STORAGE_KEY = "deskmemo-data"

export function loadMemos(): Memo[] | null {
  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) return null

  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function saveMemos(memos: Memo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memos))
}