import express from 'express';
// const express = require("express");

const app = express();

app.get("/api/notes", (req, res) => {
    
    res.send("you got notes");
    res.status(200).send("Here are your notes");
});

app.get("/api/notes/:id", (req, res) => {
});

app.post("/api/notes", (req, res) => {
res.status(201).send("Note created successfully");
});

app.listen(5001, () => {
  console.log('Server is running on http://localhost:5001');
});