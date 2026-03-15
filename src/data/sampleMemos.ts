import type { Memo } from "../types/memo"

export const sampleMemos: Memo[] = [
  {
    id: "1",
    title: "最初のメモ",
    content: "DeskMemo の試作です。",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "やること",
    content: "一覧、編集、削除、検索を作る。",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "配布目標",
    content: "まずは Windows 版を出す。",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]