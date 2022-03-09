const express = require('express');
const Response = require('./api/responses');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

const NotesModel = require('./db/models/index').notes;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app
    .get('/', (req, res) => {
        res.send('Server is now working');
    })
    .get('/noteskeeper/get', async (req, res) => {
        const allNotes = await Response.get(NotesModel);
        res.send(allNotes);
    })
    .post('/noteskeeper/post', (req, res) => {
        console.log("\n\nRequest body:\n\n" + req.body);

        res.send('Done');
    })
    .put('/noteskeeper/put', (req, res) => {
        res.send('Put request');
    })
    .delete('/noteskeeper/delete', (req, res) => {
        res.send('Delete request');
    })
    .listen(PORT);