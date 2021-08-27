import { utilService } from "../../../services/util.service.js";
import { noteService } from "../services/note.service.js";
export class AddTxt extends React.Component {
  state = {
    txt: "",
  };

  onAddNote = (ev) => {
    ev.preventDefault();
    const { txt } = this.state;

    const note = {
      id: utilService.makeId(),
      type: "note-txt",
      isPinned: false,
      info: {
        txt: `${txt}`,
      },
      style: {},
    };

    console.log(txt);
    // noteService.addNote(note);
    this.props.onAdd(note)
  };

  handleChange = (ev) => {
    this.setState({ txt: ev.target.value });
  };

  render() {
    const { txt } = this.state;
    return (
      <section>
        <form onSubmit={this.onAddNote} action="">
          <input
            onChange={this.handleChange}
            value={txt}
            placeholder="Enter Note"
            type="text"
          />
          <button>Add</button>
        </form>
      </section>
    );
  }
}
