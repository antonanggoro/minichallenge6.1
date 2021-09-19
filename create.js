const { User } = require("./models");

User.create({
  username: "user name",
  password: "password",
}).then((user) => {
  console.log(user);
});
