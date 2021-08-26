import { noteService } from "../services/note.service.js";
import { NoteList } from "../cmps/NoteList.jsx";
import {KeepHeader} from '../cmps/KeepHeader.jsx'
import { NoteEdit } from "../cmps/NoteEdit.jsx";
import { eventBusService } from '../services/event-bus-service.js';

export class Keep extends React.Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    this.loadNoates();
  }

  loadNoates = () => {
    noteService.query().then((notes) => {
      eventBusService.emit('notes-count', notes.length)
      this.setState({ notes });
    });
  };

  render() {
    const { notes } = this.state;
    if (!notes) return <div>Loading...</div>;
    return (
      <section className="note-edit">
        <section>
          <KeepHeader />
          </section>

        <section className="note-list">
          <NoteList notes={notes} onRemoveNote={this.onRemoveNote} />
        </section>
      </section>
    );
  }
}
