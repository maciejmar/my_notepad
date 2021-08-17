const express = require('express');
const router = express.Router();
const noteActions = require('../controllers/api/noteActions')


//getting notes
router.get('/notes', noteActions.getAllNotes);
//getting the note
router.get('/notes/:id', noteActions.getNote);
//saving note
router.post('/notes/', noteActions.saveNote);
//editing note
router.put('/notes/:id', noteActions.updateNote);
//deleting note
router.delete('/notes/:id', noteActions.deleteNote);

module.exports = router;