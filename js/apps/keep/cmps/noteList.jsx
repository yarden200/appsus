import { NotePreview } from "./NotePreview.jsx"

export function NoteList(props) {
  return (
    <div className="note-list">
     
      {props.notes.map(note => <NotePreview key={note.id} note={note}/> )}
    </div>
  )
}
