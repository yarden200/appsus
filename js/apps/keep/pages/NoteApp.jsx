import { noteService } from "../services/note.service.js";
import { NoteList } from "../cmps/NoteList.jsx";
import { KeepHeader } from "../cmps/KeepHeader.jsx";
import { eventBusService } from "../../../services/event-bus-service.js";
import { AddNote } from "../cmps/AddNote.jsx";
import {NoteFilter} from "../cmps/NoteFilter.jsx"

export class NoteApp extends React.Component {
  state = {
    notes: [],
    filter: null
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    noteService.query(this.state.filter).then((notes) => {
      eventBusService.emit("notes-count", notes.length);
      this.setState({ notes });
    });
  };

  onFilter = (filter) => {
    this.setState({filter}, () => {
        this.loadNotes()
    })
}

  onAdd = (note) => {
    noteService.addNote(note)
      .then(() => {
        this.loadNotes()
      })
  }
  onDeleteNote = (noteId) => {
    noteService.deleteNote(noteId)
      .then(() => {
        this.loadNotes()
      })
  }


  render() {
    const { notes } = this.state;
    if (!notes) return <div>Loading...</div>;
    return (
      <section className="main">
          <KeepHeader />
        <section className="edit-contienr">
        <NoteFilter onFilter={this.onFilter}/>
            <AddNote onAdd={this.onAdd} />
            </section>
        <section className="notes-contiener">
            <NoteList notes={notes} onDeleteNote={this.onDeleteNote} />
          </section>
      
      </section>
    );
  }
}
