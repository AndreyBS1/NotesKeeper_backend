const express = require('express');
const Notes = require('./db/models/notes');

const app = express();
const PORT = process.env.PORT || 8000;

app
    .get('/', (req, res) => {
        res.send('Server is now working');
    })
    .get('/noteskeeper/get', (req, res) => {
        const allNotes = Notes.findAll();
        res.send('Get request\n\n', + allNotes);
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