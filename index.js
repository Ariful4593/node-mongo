const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    const fruits = {
        product: 'ada',
        price: 500,
        weight: 300,
    }
    res.send(fruits)
})
app.get('/fruits/banana', (req, res) =>{
    const banaa = {
        product: 'banana',
        price: 100,
        hali: 3
    }
    res.send(banaa)
})

const user = ['arif', 'selim', 'karim', 'fahad','kaium']
app.get('/user/:id', (req, res) =>{
    const userId = req.params.id;
    const name = user[userId]
    res.send({userId, name})
    // console.log(userId)
})

app.post('/addUser', (req, res) =>{
    // console.log('data received: ',req.body)
    const user = req.body;
    user.id = 55;
    res.send(user)
})

app.listen(3000, () => console.log("Listening port 3000"))
