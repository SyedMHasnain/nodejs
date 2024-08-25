const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  res.json({
    users: [
      "ONE",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven"
      
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// mongodb+srv://Userdb:admin@cluster1.xr0p7xj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1

// app.get('/user', (req, res) => {
//     res.send(users);
// });

// app.post('/user', (req, res) => {
//      users.push({...req.body, id: Date.now().toString(36)});
//     res.status(201).send( { status:"201", user:req.body ,  message: "User Created Successfully"});

// });
// app.delete('/user/:id', (req, res) => {
//   const { id } = req.params;
//     users = users.filter((user) => user.id !== id);
//   res.send({  message: "User Deleted Successfully" });
// });
