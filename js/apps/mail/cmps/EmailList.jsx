import { EmailPreview } from './EmailPreview.jsx'
export function EmailList({ emails }) {
    return (
        <div className="email-list">
            {emails.map((email, idx) => <EmailPreview key={email.id} email={email} idx={idx} />)}
        </div>
    )
}
