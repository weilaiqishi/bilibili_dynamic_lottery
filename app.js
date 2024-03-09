//get environmental variables from env file
require('dotenv').config();

const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path')

const cors = require('cors');
app.use(cors({
	origin: '*'
}));

var dynamic= require('./routes/dynamic');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))


app.use('/dynamic', dynamic);

app.listen(PORT, function(){
	console.log('Server running on port ' + PORT);
});
