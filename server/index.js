require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require("axios");
const port = 3056;

const {
    getListings,
    removeListing,
    addListing,
    getItem
} = require("./controller/houserCtrl");

const app = express();
app.use( bodyParser.json() );

// Endpoints below

app.get("/api.listings", getListings);
app.get("/api/item/:id", getItem);
app.delete("/api/delete/:id", removeListing);
app.post("/api/listings", addListing);

// Massive below

massive( process.env.CONNECTION_STRING ).then(db => {
    app.set('db', db)
}).catch( err => console.log(err) );

app.listen(port, () => {console.log(`Cowabunga! You are now listening on port: ${port}.`)
});