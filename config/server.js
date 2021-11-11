const express = require('express');
const path = require('path')
const https = require('https')
const app = express();
// always instantiate afer express. For storing secrets in .env file.
// .env file should never be uploaded to github, and will not be avaible in the repository on download.
const dotenv = require('dotenv');
dotenv.config(); 
// server port number
const PORT = 3000;

// allows for support of static files, like images/CSS/svg/etc.
// info on configuration can be found here => https://expressjs.com/en/starter/static-files.html
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));