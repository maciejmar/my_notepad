const express = require('express');
const router = express.Router();
const noteActions = require('../controllers/api/notes')

router.get('/', noteActions.saveNote);


module.exports = router;