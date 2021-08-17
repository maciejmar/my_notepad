const Note =  require('../../db/models/note');
class NoteActions {
    saveNote (req,res)  {
        const newNote = new Note({
            title: 'zakup sprzętu', 
            body: 'komputer, monitor, mysz'

        });
        newNote.save().then (()=> {
            console.log('notatka zapisana');

        });
        res.send('strona działa poprawnie');
    }
    getAllNotes(req,res) {
        res.send('API works!')
    }
    getNote(req,res) {
        const id = req.params.id;
        res.send('This is the note '+ id);
        
    }
    updateNote(req,res) {
        res.send('note changed')
    }
    deleteNote(req,res) {
        res.send('note deleted')
    }

}
module.exports = new NoteActions();
