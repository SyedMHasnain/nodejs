const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const users = [
  {
    id: 1,
    name: "John Doe",
    img: "https://res.cloudinary.com/dybgmffbf/image/upload/v1724086748/samples/woman-on-a-football-field.jpg",
    avatar:
      "https://res.cloudinary.com/dybgmffbf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724086748/samples/woman-on-a-football-field.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    img: "https://res.cloudinary.com/dybgmffbf/image/upload/v1724086748/samples/woman-on-a-football-field.jpg",
    avatar:
      "https://res.cloudinary.com/dybgmffbf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724086748/samples/woman-on-a-football-field.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    img: "https://res.cloudinary.com/dybgmffbf/image/upload/v1724086748/samples/woman-on-a-football-field.jpg",
    avatar:
      "https://res.cloudinary.com/dybgmffbf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724086748/samples/woman-on-a-football-field.jpg",
  },
  {
    id: 4,
    name: "Bob Brown",
    img: "https://res.cloudinary.com/dybgmffbf/image/upload/v1724086748/samples/woman-on-a-football-field.jpg",
    avatar:
      "https://res.cloudinary.com/dybgmffbf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724086748/samples/woman-on-a-football-field.jpg",
  },
];

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ users });
});

app.post("/api", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ user });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
