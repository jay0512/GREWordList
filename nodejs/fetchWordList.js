const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./GREWordList-credencials.json');

// spreadsheet key from URL of the sheet
const doc = new GoogleSpreadsheet('1Ev_vLffYDecCPOXIaikVqDVmwQ4pwJpz_Lzk2NRsD70');

var http = require("http");
const express = require('express')
const app = express()
const port = 3000

app.get('/words', async (req, res) => {

    await doc.useServiceAccountAuth({
        client_email: creds.client_email,
        private_key: creds.private_key,
    });

    await doc.loadInfo();
    console.log(doc.title);

    const wordListSheet = doc.sheetsByTitle['VocabApp'];
    console.log(wordListSheet.title);
    console.log(wordListSheet.rowCount);

    wordList = [];

    const rows = wordListSheet.getRows();
    (await rows).map(row => {

        wordJson = {};
        if (row.SrNo) {
            wordJson["SrNo"] = row.SrNo;
        }

        if (row.Word) {
            wordJson["Word"] = row.Word;
        }

        if (row.Meaning) {
            wordJson["Meaning"] = row.Meaning;
        }

        if (row.Example) {
            wordJson["Example"] = row.Example;
        }

        if (row.Synonyms) {
            wordJson["Synonyms"] = row.Synonyms;
        }

        wordList.push(wordJson);

    })

    res.send(wordList);

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


async function readSheet() {


}