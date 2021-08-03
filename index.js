const express = require('express');
const path = require('path');
const app = express();


// const viewsFolder = path.join(__dirname, 'views');
// const expressViews = express.static(viewsFolder);
// app.use(expressViews);

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
  res.send('hello world');
})

app.use((req, res) => {
  res.send('page not found');
})


const port = process.env.PORT || 8080;
app.listen(port, () => console.log('working...'));