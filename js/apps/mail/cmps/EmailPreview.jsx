import { utilService } from '../../../services/util.service.js'
const { Link } = ReactRouterDOM

export function EmailPreview({ email, idx }) {
    const { id, from, to, subject, sentAt, isSent, isRead } = email;
    const nameToShow = isSent ? utilService.getNameToShow(to) : utilService.getNameToShow(from)


    return (
        <Link className="email-link" to={`/mail/${id}`} >
            <div className={`email-preview ${idx === 0 && 'first-link'} ${isRead && 'read'}`}>
                <h5>{nameToShow}</h5>
                <p>{subject}</p>
                <h5>{`${new Date(sentAt).getHours()}:${new Date(sentAt).getMinutes()}`}</h5>
            </div>
        </Link>
    )
}

