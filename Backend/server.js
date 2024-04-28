const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { send } = require("process");

const app = express();
app.use(express.json());
app.use(cors()); //Enable CORS 


app.get("/books", (req, res) => {
    fs.readFile("BookData.json", (err, data) => {
        if(err){
            res.status(500).send("Sever Error");
            return;
        }
        const books = JSON.parse(data).Books
        res.send(books);
    })
})

app.listen(8000, () => {
    console.log("I am Listening")
})
