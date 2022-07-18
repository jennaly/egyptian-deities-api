//MODULES
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const deities = require("./deities.js")

//MIDDLEWARES
app.use(cors());

//ROUTES
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/api', (req, res) => {
    res.json(deities.deitiesObj);
})

app.get('/api/:deity', (req, res) => {
    const deity = req.params.deity.toLowerCase()
    if (deities.deitiesObj[deity]) {
        res.json(deities.deitiesObj[deity])
    } else {
        res.json(deities.deitiesObj['unknown'])
    }
})


//LISTEN
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on ${PORT}`);
})