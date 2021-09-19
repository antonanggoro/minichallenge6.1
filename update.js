const { User } = require("./models");

const query = {
  where: { id: 1 },
};

Article.update(
  {
    approved: false,
  },
  query
)
  .then(() => {
    console.log("User berhasil di update");
    process.exit();
  })
  .catch((err) => {
    console.error("Gagal mengupdate artikel");
  });
