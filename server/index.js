const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const SampleDb = require('./sample-db');

const productRoutes = require('./routes/products');

mongoose.set('strictQuery',true);

mongoose.connect(config.DB_URI)
  .then(() => {
      const sampleDb = new SampleDb()
      sampleDb.initDb()
      console.log("connected to mongoDB");
    })
    .catch(err => {
      console.log(err);
    });

const app = express();

app.use('/api/v1/products', productRoutes);

const POST = process.env.POST || '3001';

app.listen(POST, function() {
  console.log('I am runnning');
});
