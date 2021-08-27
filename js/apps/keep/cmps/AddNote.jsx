import { AddTxt } from "./AddTxt.jsx";
import { AddTodo } from "./AddTodo.jsx";

export class AddNote extends React.Component {
  state = {
    type: "txt",
  };

  onSelect = (type) => {
    this.setState({type})
  }

  render() {
    const { type } = this.state;
    return (
      <div className="note-add">

        <h1>Add Note:</h1>

        <div className="add-choice">
        <button onClick={() => {this.onSelect('txt')}}>Text</button>
        <button onClick={() => {this.onSelect('todos')}}>list</button>
        <button onClick={() => {this.onSelect('img')}}>Image</button>
        <button onClick={() => {this.onSelect('video')}}>Video</button>
        </div>

        <div className="add-input">
        {

        {
          'txt': <AddTxt onAdd={this.props.onAdd}  />
          // 'img': <AddImg funcs={this.props.funcs} />,
          // 'video': <AddVideo funcs={this.props.funcs} />,
          // 'todos': <AddTodos funcs={this.props.funcs} />
        }[type]

      }
        </div>

      
      </div>
    );
  }
}
