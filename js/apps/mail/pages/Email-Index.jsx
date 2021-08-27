import { emailService } from '../services/mail.service.js'
import { EmailList } from '../cmps/EmailList.jsx'
import { EmailFilter } from '../cmps/EmailFilter.jsx'

export class Mail extends React.Component {
    state = {
        emails: [],
        filterBy: null
    };

    componentDidMount() {
        console.log('Did mount!');
        this.loadEmails()
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy).then((emails) => {
            this.setState({ emails })
        })
    }

    onSetFilter = (filterBy) => {
        console.log('(2) onSetFilter gets:', filterBy);
        this.setState({ filterBy }, this.loadEmails)
    }

    render() {
        const { emails } = this.state
        return (
            <section className="email-index" >
                <h1>hello mail</h1>
                <EmailFilter onSetFilter={this.onSetFilter} />
                <EmailList emails={emails} />
            </section>
        )
    }
}