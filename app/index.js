const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(process.env.PORT || 80, function() {
 console.log('listening on port ' + process.env.PORT || 80);
});

