import { noteService } from "../services/note.service.js";

export class NoteEdit extends React.Component {
  state = {
    note: {},
  };

  componentDidMount() {}

  handleChange = ({}) => {};

  render() {
    return (       <form id="form" autocomplete="off">
    <input type="text" id="note-title" placeholder="Title"/>
    <input type="text" id="note-text" placeholder="Take a note..."/>
    <div id="form-buttons">
      <button type="submit" id="submit-button">Submit</button> 
      <button type="button" id="form-close-button">Close</button> 
    </div>
</form>
)
  }
}
