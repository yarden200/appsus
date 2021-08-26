// const { Link } = ReactRouterDOM
import {utilService} from '../../../services/util.service.js'

export function EmailPreview({ email }) {
    console.log('email sentAT',email.sentAt);
    console.log('in email preview:',utilService.getTime(email.sentAt))
    return (
        <div className="email-preview">
            <h5>{email.from}</h5>
            <p>{email.subject}</p>
            <h5>{email.timeToView}</h5>
        </div>
    )
}


 /* <Link to={`/car/${car.id}`} >Car details</Link> */