import { NoteTxt } from "./NoteTxt.jsx";
import { NoteImg } from "./NoteImg.jsx";
import { NoteTodo } from "./NoteTodo.jsx";
import { NoteVideo } from "./NoteVideo.jsx";


export function NotePreview({ note, onDeleteNote }) {

  switch (note.type) {
    case 'note-txt':
      return <NoteTxt onDeleteNote={onDeleteNote} note={note}  />
    case 'note-img':
      return <NoteImg onDeleteNote={onDeleteNote} note={note}  />
    case 'note-todos':
      return <NoteTodo onDeleteNote={onDeleteNote} note={note}  />
    case 'note-video':
      return <NoteVideo onDeleteNote={onDeleteNote} note={note}  />
  }




}










// export class NotePreview extends React.Component {
//   state = {
//     note: null,
//     noteType: null,
//     noteStyle: {},
//   };

//   componentDidMount() {
//     const note = this.props.note;
//     this.setState({
//       note,
//       noteType: note.type,
//       noteStyle: note.backgroundColor,
//     });
//   }

//   render() {

//     const { note, noteType, noteStyle } = this.state;
//     if (!note) return <div>Loading...</div>;
//     const DynamicNote = (props) => {
//       console.log(props)
//       switch (props.type) {
//         case "note-txt":
//           return <NoteTxt   {...props} />;
//         case "note-img":
//           return <NoteImg {...props} />;
//         case "note-todos":
//           return <NoteTodo {...props} />;
//       }

//     };

//     return (

//       <div>
//         <DynamicNote
//           type={noteType}
//           note={note}
//           onDeleteNote={this.props.onDeleteNote}
//           // onRemoveNote={this.props.onRemoveNote}
//           noteStyle={noteStyle}
//         />
//       </div>

//     );
//   }
// }
