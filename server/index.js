const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());


// let users=[];


mongoose.connect("mongodb+srv://Userdb:admin@cluster1.xr0p7xj.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster1" )
  .then(() => console.log("Connected!"));
 


app.get('/', (req, res) => {
  res.send('This is NODe JS Application');
});


app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
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