const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
  path: './config.env'
});
const app = require('./app');

// Password constant
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  // local ->
  //.connect(process.env.DATABASE.LOCAL,{)
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful'));

// 4 -> Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
