const mongoose = require('mongoose');
const uri = 'mongodb+srv://rajputsanjana1805_db_user:Sanjana1805@cluster0.sai1j5y.mongodb.net/task-manager?retryWrites=true&w=majority&appName=Cluster0';
console.log('connecting...');
mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log('connected');
    process.exit(0);
  })
  .catch((err) => {
    console.error('err', err.message);
    console.error(err);
    process.exit(1);
  });
