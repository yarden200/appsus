export const NoteImg = ({ note, onDeleteNote }) => {
    return (
        <article className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>

            <img src={note.info.url} />
            <h5>{note.info.title}</h5>
            <section className="edit-continer">
            <span onClick={() => { onDeleteNote(note.id) }}>X</span>
            </section>

        </article>
    )
}