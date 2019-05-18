const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
import cors from 'cors';

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get('*', cors(), (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log('server started')