import { eventBusService } from "../services/event-bus-service.js"

// const { NavLink, withRouter } = ReactRouterDOM

export class KeepHeader extends React.Component {

  state = {
    notesCount: 0
  }

  removeEventBus;

  componentDidMount() {
    this.removeEventBus = eventBusService.on('notes-count', (notesCount) => {
      this.setState({ notesCount })
    })
  }

  componentWillUnmount() {
    this.removeEventBus()
  }
  


  render() {

    return (
      <section className="app-header">
        
        <p>You got total of  {this.state.notesCount} notes </p>
 
      </section>
    )
  }

}
