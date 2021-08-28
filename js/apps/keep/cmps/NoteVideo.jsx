

export const NoteVideo = ({ note, onDeleteNote }) => {

    return (
        <article className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>

            <div className="note-video">
                {/* <iframe src={note.info.url} ></iframe> */}
                <iframe width="250" height="" src={note.info.src}  frameBorder='0'   allowFullScreen></iframe>
                <h4>{note.info.title}</h4>

            </div>
          
            <section className="edit-continer">
                <button onClick={() => { onDeleteNote(note.id) }}>X</button>
            </section>
        </article>
    )
}