export const noteService = {
    query

}

function query(){
    return Promise.resolve(gNotes)
}

const KEY = 'notesDB';
var gNotes;


 gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: { txt: "go to gym" }
    },
    {
        id: "n102",
        type: "note-txt",
        isPinned: true,
        info: { txt: "pay the bills" }
    },
    {
        id: "n103",
        type: "note-txt",
        isPinned: true,
        info: { txt: "feed my dog" }
    },
    {
        id: "n104",
        type: "note-img",
        info: {
            url: "http://some-img/me",
            title: "Bobi and Me"
        },
        style: { backgroundColor: "#00d" }
    },
    {
        id: "n105",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [{ txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 }]
        }
    }
];
// gNotes=notes


// function _creatNote(){
//     return {
//         id: 
//     }
// } 