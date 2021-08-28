import { eventBusService } from "../../../services/event-bus-service.js"

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
     
        <img className="header-logo" src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"></img> 
        <h2 className="header-title"></h2> 
    

        <p>You got total of  {this.state.notesCount} notes </p>
 
      </section>
    )
  }

}
