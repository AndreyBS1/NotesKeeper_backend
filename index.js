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
            res.send('success');
        } else {
            console.log("\n\nERROR\n\n");
            res.send('error');
        }
    })

    .put('/noteskeeper/put', async (req, res) => {
        console.log("\n\nRequest body:\n");
        console.log(req.body);

        await Response.put(NotesModel, req.body);

        console.log("\n\nSUCCESS\n\n");
        res.send('success');
    })

    .delete('/noteskeeper/delete', async (req, res) => {
        console.log("\n\nRequest body:\n");
        console.log(req.body);

        await Response.delete(NotesModel, req.body);

        console.log("\n\nSUCCESS\n\n");
        res.send('success');
    })

    .listen(PORT);