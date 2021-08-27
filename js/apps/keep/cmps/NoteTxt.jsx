
export const NoteTxt = ({ note, onDeleteNote }) => {

    return (
        <article className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>

            <h4>{note.info.txt}</h4>
            <section className="edit-continer">
            <span onClick={() => { onDeleteNote(note.id) }}>X</span>
            </section>
        </article>
    )
}