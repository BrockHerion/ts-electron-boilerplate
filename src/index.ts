import { app, BrowserWindow } from 'electron';
import path from 'path';

app.on('ready', () => {

  // Create a new window and add properties to it
  const window = new BrowserWindow({
    width: 600,
    height: 400
  });

  // Get the index.html file
  const index = path.join(__dirname, '..', 'public', 'index.html');

  // Load the window
  window.loadFile(index)
    .then(() => {
      console.log('Window was loaded successfully!');
    })
    .catch((e) => {
      console.error(`An error occurred: ${e}`);
    });

});