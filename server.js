const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
//app.use(express.static(__dirname));
//app.use(express.static('public')) 
app.use(express.static(path.join(__dirname, 'public')));


// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  console.log('server started')
});

app.listen(port);

// const http = require('http');

// process
//   .on('SIGTERM', shutdown('SIGTERM'))
//   .on('SIGINT', shutdown('SIGINT'))
//   .on('uncaughtException', shutdown('uncaughtException'));

// setInterval(console.log.bind(console, 'tick'), 1000);
// http.createServer((req, res) => res.end('hi'))
//   .listen(process.env.PORT || 3000, () => console.log('Listening'));

// function shutdown(signal) {
//   return (err) => {
//     console.log(`${ signal }...`);
//     if (err) console.error(err.stack || err);
//     setTimeout(() => {
//       console.log('...waited 5s, exiting.');
//       process.exit(err ? 1 : 0);
//     }, 5000).unref();
//   };
// }