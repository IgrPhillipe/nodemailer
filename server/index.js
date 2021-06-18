const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/index');
const cors = require('cors');

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Ready at port ${process.env.PORT || 3001}...`)
});