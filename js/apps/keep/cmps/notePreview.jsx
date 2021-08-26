import { NoteTxt } from "./note-type-preview/NoteTxt.jsx";
import { NoteImg } from "./note-type-preview/NoteImg.jsx";
import { NoteTodo } from "./note-type-preview/NoteTodo.jsx";

export class NotePreview extends React.Component {
  state = {
    note: null,
    noteType: null,
    noteStyle: {},
  };

  componentDidMount() {
    const note = this.props.note;
    this.setState({
      note,
      noteType: note.type,
      noteStyle: note.backgroundColor,
    });
  }

  render() {
    const { note, noteType, noteStyle } = this.state;
    if (!note) return <div>Loading...</div>;
    const DynamicCmp = (props) => {
      switch (props.type) {
        case 'note-txt':
          return <NoteTxt  {...props} />;
        case 'note-img':
            return <NoteImg {...props} />
        case 'note-todos':
            return <NoteTodo {...props} />
      }
    };

    return (
      <div>
        <DynamicCmp
          type={noteType}
          note={note}
          onRemoveNote={this.props.onRemoveNote}
          noteStyle={noteStyle}
        />
      </div>
  
    );
  }
}
