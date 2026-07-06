const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const PORT = '3001';

const dns = require('node:dns/promises');

dns.setServers(['1.1.1.1', '1.0.0.1']);

//enable cors
app.use(cors());
//enable json payload
app.use(express.json());

//route the customer api
const customerRoutes = require('../backend/routes/customers');
//use the routes
app.use('/api/customers', customerRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Customer Api');
});
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is Running on PORT ${PORT}`);
  } else {
    console.log(`Server Error ${error}`);
  }
});

connectDB().catch((error) => console.error(error));

async function connectDB() {
  const connectionString =
    'mongodb+srv://rajeevcluster1_db_user:6yRfw37RbkcsCM7u@cluster1.9dm9by3.mongodb.net/?appName=Cluster1';
  await mongoose.connect(connectionString);
  mongoose.set('strictQuery', true);
}
