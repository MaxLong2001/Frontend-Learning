const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
app.use(express.static(__dirname + '/static'));

app.get('/person', (req, res) => {
    res.send({
        name: 'John',
        age: 30
    });
})

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is running on port 5000');
    }
})