const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({
  path: './config.env'
});

// console.log(app.get('env'));
// console.log(process.env);

// 4 -> Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
