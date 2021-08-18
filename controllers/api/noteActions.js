const Note =  require('../../db/models/note');
class NoteActions {
    async saveNote (req,res)  {
        console.log('req.body.title ---', req.body.title)
        const title = req.body.title;
        const body = req.body.body;
        const note = new Note({ title, body});
        await note.save();
        res.status(200).json(note);

    }
    
    async getAllNotes(req,res) {
        const doc = await Note.find({});
        res.status(200).json(doc);
        
    }
    
    async getNote(req,res) {
        const id = req.params.id;
        const note = await Note.findOne({ _id: id});

        res.status(200).json(note);
        
    }
    updateNote(req,res) {
        res.send('note changed')
    }
    deleteNote(req,res) {
        res.send('note deleted')
    }

}
module.exports = new NoteActions();
