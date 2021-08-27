import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/storage.service.js';

export const emailService = {
    query,
    getEmailById,
    deleteEmail,
};

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}


const KEY = 'emails'
var gEmails;

_createEmails()
// window.gEmails = gEmails

function query(filterBy) {
    console.log('(3) query gets:', filterBy);
    if (filterBy) {
        let { searchEmail } = filterBy
        console.log('searchEmail: ',searchEmail);
        const emailsToShow = gEmails.filter(email => {
            console.log('email subject', email.subject)
            console.log('email body', email.body); 
            return ((email.subject.includes(searchEmail) || email.body.includes(searchEmail)))
        })
        console.log('query send:', emailsToShow);
        return Promise.resolve(emailsToShow)
    }
    return Promise.resolve(gEmails)
}

function getEmailById(emailId) {
    var email = gEmails.find(function (email) {
        return emailId === email.id
    })
    return Promise.resolve(email)
}

function deleteEmail(emailId) {
    var emailIdx = gEmails.findIndex(function (email) {
        return emailId === email.id
    })
    gEmails.splice(emailIdx, 1)
    _saveEmailsToStorage();
    return Promise.resolve()
}

function _createEmails() {
    var emails = storageService.loadFromStorage(KEY)
    if (!emails || !emails.length) {
        var emails = [
            _createEmail('First Mail', 'This is youre fisrt inbox mail', false, loggedinUser.email, 'Appsus@gmail.com'),
            _createEmail('Welcome', 'Welcome to Appsus!!!', false, loggedinUser.email, 'Appsus@gmail.com'),
            _createEmail('KEEP', 'Keep your drafts at KEEP...', false, loggedinUser.email, 'Appsus@gmail.com'),
        ]
    }
    gEmails = emails;
    _saveEmailsToStorage();
}

function _createEmail(subject, body, isSent, to, from) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        sentAt: new Date(),
        isSent,
        to,
        from,
        isRead: false,
    }
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}

