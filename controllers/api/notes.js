const Note =  require('../../db/models/note');
module.exports = {
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
}