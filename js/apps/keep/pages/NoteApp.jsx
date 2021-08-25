import { noteService } from "../services/note.service.js";
import { NoteList } from "../cmps/NoteList.jsx";
import { NoteEdit } from "../cmps/NoteEdit.jsx";

export class Keep extends React.Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    this.loadNoates();
  }

  loadNoates = () => {
    noteService.query().then((notes) => {
      this.setState({ notes });
    });
  };

  render() {
    const { notes } = this.state;
    return (
      <section className="note-edit">
        <NoteEdit notes={notes} />

        <section className="note-list">
          <NoteList notes={notes} />
        </section>
      </section>
    );
  }
}
