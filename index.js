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

    .post('/noteskeeper/post', async (req, res) => {
        console.log("\n\nRequest body:\n");
        console.log(req.body);

        const result = await Response.post(NotesModel, req.body);

        if (result) {
            console.log("\n\nSUCCESS\n\n");
        } else {
            console.log("\n\nERROR\n\n");
        }
    })

    .put('/noteskeeper/put', async (req, res) => {
        console.log("\n\nRequest body:\n");
        console.log(req.body);

        await Response.put(NotesModel, req.body);

        console.log("\n\nSUCCESS\n\n");
    })

    .delete('/noteskeeper/delete', (req, res) => {
        res.send('Delete request');
    })

    .listen(PORT);