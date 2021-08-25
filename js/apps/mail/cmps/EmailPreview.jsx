// const { Link } = ReactRouterDOM

export function EmailPreview({ email }) {
    console.log('email:',email);
    return (
        <div className="email-preview">
            <h5>{email.to}</h5>
            <p>{email.subject}</p>
            <h5>{email.sentAt}</h5>
        </div>
    )
}


 /* <Link to={`/car/${car.id}`} >Car details</Link> */