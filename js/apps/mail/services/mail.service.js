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
    return Promise.resolve(gEmails)
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
        timeToView: getTime(new Date()),
        isSent,
        to,
        from,
        isRead: false,
    }
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}

function getTime(date) {
    console.log('in get time2222:', typeof date);
    // var time = new Date()
    // console.log(typeof time);
    // let hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`
    // let minutes = Date.getMinutes() < 10 ? `0${Date.getMinutes()}` : `${Date.getMinutes()}`
    // return  `${hours}:${minutes}` 
    // console.log('after:',hours);
}