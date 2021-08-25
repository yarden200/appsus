export function NotePreview(props){
    return (
        <div className="car-preview">
            <h2>id - {props.note.id}</h2>
            <h2>txt - {props.note.info.txt}</h2>
        </div>

    )
}