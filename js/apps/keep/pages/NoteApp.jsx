import { noteService } from "../services/note.service.js";
import { NoteList } from "../cmps/noteList.jsx";

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
    <section className="keep-app">
      <NoteList notes={notes} />
    
    </section>)
  }
}
