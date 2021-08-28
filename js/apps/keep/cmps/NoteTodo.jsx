export const NoteTodo = ({note, onDeleteNote }) => {
    
    return (
        <article className="note-preview" style={{backgroundColor: note.style.backgroundColor}}>
            
            <ul >
                {note.info.todos.map(todo => <li key={todo.id}>{todo.txt}</li>)}
            </ul>
            <section className="edit-continer">
            <button onClick={() => { onDeleteNote(note.id) }}>X</button>
            </section>
        </article>
    )
}