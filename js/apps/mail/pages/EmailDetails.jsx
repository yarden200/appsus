import { utilService } from '../../../services/util.service.js'
import { emailService } from '../services/mail.service.js'
export class EmailDetails extends React.Component {
    state = {
        email: null
    }

    componentDidMount() {
        console.log('did mount')
        this.loadEmail()
    }

    loadEmail = () => {
        const id = this.props.match.params.mailId;
        emailService.getEmailById(id)
            .then(email => {
                if (!email) {
                    this.props.history.push('/')
                    return
                }
                if (!email.isSent && !email.isRead) email.isRead = true;
                this.setState({ email })
            })
    }

    onDeleteEmail = () => {
        emailService.deleteEmail(this.state.email.id).then(this.onBack)
    }

    onBack = () => {
        this.props.history.push('/mail')
    }



    render() {
        const { email } = this.state
        if (!email) return <div>Loading...</div>
        // console.log(email)
        const { subject, body, isSent, to, from } = this.state.email
        const nameToShow = isSent ? utilService.getNameToShow(to) : utilService.getNameToShow(from)

        return (
            <section className="email-details">
                {<h2>{subject}</h2>}
                <h5>{nameToShow} {`<${isSent ? to : from}>`}</h5>
                <p>{body}</p>
                <button onClick={this.onDeleteEmail}>
                    Delete Email
                </button>
            </section>
        )
    }
}