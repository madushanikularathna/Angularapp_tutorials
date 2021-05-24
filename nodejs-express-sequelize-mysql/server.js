
const app = require(`./app`);

const db = require("./app/models");
db.sequelize.sync();


// set port, listen for requests
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});