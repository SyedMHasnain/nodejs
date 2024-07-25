const express = require('express');
const app = express();

app.use(express.json());


let users=[];

app.get('/', (req, res) => {
  res.send('This is NODe JS Application');
});

app.get('/user', (req, res) => {
    res.send(users);
});

app.post('/user', (req, res) => {
     users.push({...req.body, id: Date.now().toString(36)});
    res.status(201).send( { status:"201", user:req.body ,  message: "User Created Successfully"});
   
});
app.delete('/user/:id', (req, res) => {
  const { id } = req.params;
    users = users.filter((user) => user.id !== id);
  res.send({  message: "User Deleted Successfully" });
});

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});