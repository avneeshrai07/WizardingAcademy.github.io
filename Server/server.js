const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const {SignUp,Content} = require('../Database/mongodb');
// const Content = require('../Database/mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../Public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Public', 'HTML', 'index.html'));
});

app.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, '../Public', 'HTML', 'signin.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../Public', 'HTML', 'signup.html'));
});

app.get('/admission_page', (req, res) => {
  res.sendFile(path.join(__dirname, '../Public', 'HTML', 'admission_page.html'));
});

app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, '../Public', 'HTML', 'blog.html'));
});

app.post('/signup', async (req, res) => {
  const { newUsername, newPassword } = req.body;
  const data = {
    newUsername,
    newPassword
  };

  try {
    await SignUp.create(data);
    console.log('User registered successfully:', data);
    res.sendFile(path.join(__dirname, '../Public', 'HTML', 'success.html'));
  } catch (error) {
    console.error('Error in sign-up:', error);
    res.status(500).sendFile(path.join(__dirname, '../Public', 'HTML', 'error.html'));
  }
});

app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await SignUp.findOne({ newUsername: username });

    if (user) {
      // User found, now check if the password matches
      if (user.newPassword === password) {
        console.log('User signin successful:', user);
        res.sendFile(path.join(__dirname, '../Public', 'HTML', 'success.html'));
      } else {
        // Password does not match
        console.log('Invalid password for user:', username);
        res.status(401).sendFile(path.join(__dirname, '../Public', 'HTML', 'error.html'));
      }
    } else {
      // User not found
      console.log('User not found:', username);
      res.status(404).sendFile(path.join(__dirname, '../Public', 'HTML', 'error.html'));
    }
  } catch (error) {
    console.error('Error in signin:', error);
    res.status(500).sendFile(path.join(__dirname, '../Public', 'HTML', 'error.html'));
  }
});





// app.post('/save-content', async (req, res) => {
//   const { content } = req.body;

//   try {
//     console.log('Content received:', content);

//     // Save the content to the database or handle it as needed
//     // For example, you can use your Content model
//     await Content.create({ content });

//     console.log('Content saved successfully:', content);

//     // Respond to the client
//     res.status(200).send('Content saved successfully');
//   } catch (error) {
//     console.error('Error saving content:', error);
//     res.status(500).send('Error saving content');
//   }
// });






app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
