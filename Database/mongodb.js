// mongodb.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hogwarts_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connection established');
  })
  .catch((error) => {
    console.log('MongoDB connection failed', error);
  });

const SignUpSchema = new mongoose.Schema({
  newUsername: {
    type: String,
    required: true,
  },
  newPassword: {
    type: String,
    required: true,
  }
});

const ContentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

const SignUp = mongoose.model('Users', SignUpSchema);
const Content = mongoose.model('Content', ContentSchema);

// Export both models as an object
module.exports = { SignUp, Content };
