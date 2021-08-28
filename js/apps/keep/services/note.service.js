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


function query(filter) {
 

  if (!filter)
    return Promise.resolve(gNotes)
  else{
   
    const {search, show} = filter
    let filteredNotes = gNotes.filter((note) => {

      switch (note.type){
        case 'note-txt':
         return note.info.txt.includes(search)
        case 'note-img':
          return note.info.title.includes(search)
        case 'note-video':
          return note.info.title.includes(search)
        case 'note-todos':
          return note.info.label.includes(search)
      }
    })
    
    let filteredNotesToShow = filteredNotes.filter((note) => {
      switch (show){
        case 'all':
          return true
          case 'txt':
            return note.type === 'note-txt'
            case 'img':
            return note.type === 'note-img'
            case 'video':
            return note.type === 'note-video'
            case 'todos':
            return note.type === 'note-todos'
      }
    })
    return Promise.resolve(filteredNotesToShow )
  }
   
}

function _createNotes() {
    gNotes = [
        {
            id: utilService.makeId(),
            type: "note-txt",
            isPinned: true,
            info: { txt: 'Meeting Notes :Request feedback from Jenny. Talk about conference' },
            style: { backgroundColor: "#0F9D58" }
        },
        {
            id: utilService.makeId(),
            type: "note-txt",
            isPinned: true,
            info: {txt: "Team Meeeting notes: -Try to start on time next time!    " },
            style: { backgroundColor: "#F4B400" }
        },

        {
            id: utilService.makeId(),
            type: "note-img",
            info: {
                url: "https://picsum.photos/200",
                title: "Nice photo to kepp"
            },
            style: { backgroundColor: "#4285F4" }
        },
        {
            id: utilService.makeId(),
            type: "note-video",
            isPinned: true,
            info: { src: "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1",
                    title: "love that song!" },
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





