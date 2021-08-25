import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/storage.service.js';

export const emailService = {
    query,
};

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}


const KEY = 'emails'
var gEmails;

_createEmails()


function query() {
    console.log('in service gEmails:', gEmails);
    return Promise.resolve(gEmails)
}


function _createEmails() {
    var emails = storageService.loadFromStorage(KEY)
    if (!emails || !emails.length) {
        var emails = [
            _createEmail('First Mail', 'This is youre fisrt inbox mail', false, loggedinUser.email, 'Appsus@gmail.com'),
            _createEmail('Welcome', 'Welcome to Appsus!!!', false, loggedinUser.email, 'Appsus@gmail.com'),
            _createEmail('KEEP', 'Keep your drafts at KEEP...', false, (loggedinUser.email), 'Appsus@gmail.com'),
        ]
    }
    console.log('_createEmails:', emails);
    gEmails = emails;
    _saveEmailsToStorage();
}

function _createEmail(subject, body, isSent, sender) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        sentAt: Date.now(),
        isSent,
        sender,
        isRead: false,
    }
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}