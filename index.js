const express = require('express');
const Response = require('./api/responses');

const app = express();
const PORT = process.env.PORT || 8000;

app.set('db', require('./db/models/index'));
const NotesModel = app.get('db').notes;

app
    .get('/', async (req, res) => {
        const allNotes = await Response.get(NotesModel);
        res.send(
            'Get request\n\n' +
            'Notes (test): ' + allNotes
        );
    }
    .get('/noteskeeper/get', async (req, res) => {
        const allNotes = await Response.get(NotesModel);
        res.send(
            'Get request\n\n' +
            'Notes (test): ' + allNotes
        );
    })
    .post('/noteskeeper/post', (req, res) => {
        res.send('Post request');
    })
    .put('/noteskeeper/put', (req, res) => {
        res.send('Put request');
    })
    .delete('/noteskeeper/delete', (req, res) => {
        res.send('Delete request');
    })
    .listen(PORT);