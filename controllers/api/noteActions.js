const Note =  require('../../db/models/note');
class NoteActions {
    async saveNote (req,res)  {
        console.log('req.body.title ---', req.body)
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
    async updateNote(req,res) {
        const id = req.params.id;
        const title = req.body.title;
        const body = req.body.body;
        
        const note = await Note.findOne({ _id: id});
        note.title = title;
        note.body = body;
        await note.save();
        res.status(200).json(note);
    }
    async deleteNote(req,res) {
        const id = req.params.id;
        await Note.deleteOne({ _id: id});
        res.sendStatus(204);
    }

}
module.exports = new NoteActions();
