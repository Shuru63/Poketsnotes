const app = require("./app");
const dotenv = require('dotenv');
const path = require('path');

const ConnectDB = require("./Database/database");
const configPath = path.resolve(__dirname,'./config/config.env');

dotenv.config({ path: configPath });
ConnectDB();

const sever=app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);

});