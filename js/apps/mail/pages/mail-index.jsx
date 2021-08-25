import { emailService } from '../services/mail.service.js'
import { EmailList } from '../cmps/EmailList.jsx'

export class Mail extends React.Component {
    state = {
        emails: [],
    };

    componentDidMount() {
        console.log('Did mount!');
        this.loadEmails()
    }

    loadEmails = () => {
        emailService.query().then((emails) => {
            this.setState({ emails })
        })
    }

    render() {
        const { emails } = this.state
        return (
            <section className="email-index" >
                <h1>hello mail</h1>
                <EmailList emails={emails} />
            </section>
        )
    }
}