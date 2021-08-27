import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'


export const noteService = {
    query,
    addNote,
    _loadNotes,
    deleteNote

}



const KEY = 'notesDB';
let gNotes = null;

_loadNotes()


function query() {
    return Promise.resolve(gNotes)
}

function _createNotes() {
    gNotes = [
        {
            id: utilService.makeId(),
            type: "note-txt",
            isPinned: true,
            info: { txt: utilService.makeLorem(75) },
            style: { backgroundColor: "#0F9D58" }
        },
        {
            id: utilService.makeId(),
            type: "note-txt",
            isPinned: true,
            info: { txt: utilService.makeLorem(40) },
            style: { backgroundColor: "#F4B400" }
        },

        {
            id: utilService.makeId(),
            type: "note-img",
            info: {
                url: "https://picsum.photos/200",
                title: "Bobi and Me"
            },
            style: { backgroundColor: "#4285F4" }
        },
        {
            id: utilService.makeId(),
            type: "note-video",
            isPinned: true,
            info: { src: "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1",
                    title: "video" },
            style: { backgroundColor: "#DB4437" }
        },
        {
            id: utilService.makeId(),
            type: "note-todos",
            info: {
                label: "Get my stuff together",
                todos: [{ txt: "Driving liscence", doneAt: null, id: utilService.makeId() },
                { txt: "Coding power", doneAt: 187111111, id: utilService.makeId() }]
            },
            style: { backgroundColor: "#0F9D58" }
        }
    ];
}

function _loadNotes() {
    let notes = storageService.loadFromStorage(KEY);
    if (!notes || !notes.length)
      _createNotes()  
    else gNotes = notes
    _saveNotesToStorage();
  
  }

  function addNote(note) {
    let newNote = JSON.parse(JSON.stringify(note))
    newNote.id = utilService.makeId()
    gNotes.push(newNote)
    _saveNotesToStorage();
    return Promise.resolve()
  }
  
  
  function _saveNotesToStorage() {
    storageService.saveToStorage('notesDB', gNotes);
  }

  function deleteNote(noteId) {
    var noteIdx = getNoteIdx(noteId)
    gNotes.splice(noteIdx, 1);
    _saveNotesToStorage();
    return Promise.resolve()
  }
  
  function getNoteIdx(noteId) {
    return gNotes.findIndex((note) => {
      return noteId === note.id;
    })
  }





