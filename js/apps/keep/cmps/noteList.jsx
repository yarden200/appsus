import { NotePreview } from "./NotePreview.jsx"

export function NoteList({notes, onDeleteNote}) {
  return (
    <div className="note-list">
     
      {notes.map(note => <NotePreview onDeleteNote={onDeleteNote} key={note.id} note={note}/> )}
    </div>
  )
}
