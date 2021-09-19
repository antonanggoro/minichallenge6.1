const express = require("express");
const app = express();

const port = 3000;

const { User } = require("./models");

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use(express.json());

//get all user
app.get("/user", (req, res) => {
  User.findAll().then((user) => {
    res.status(200).json(user);
  });
});

//get article by ID
// app.get("/user/:id", (req, res) => {
//   User.findOne({
//     where: { id: req.params.id },
//   }).then((user) => {
//     res.status(200).json(user);
//   });
// });

app.post("/user", (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(422).json("can't create user");
    });
});

// app.put("/user/:id", (req, res) => {
//   User.update(
//     {
//       username: req.body.username,
//       password: req.body.password,
//     },
//     {
//       where: { id: req.params.id },
//     }
//   )
//     .then((user) => {
//       res.status(201).json(user);
//     })
//     .catch((err) => {
//       res.status(422).json("can't create user");
//     });
// });

// app.delete("/user/:id", (req, res) => {
//   User.destroy({
//     where: { id: req.params.id },
//   })
//     .then(() => {
//       res.status(200).json("User deleted");
//     })
//     .catch((err) => {
//       res.status(422).json("Can't delete user");
//     });
// });

//app.listen(3000);

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});
