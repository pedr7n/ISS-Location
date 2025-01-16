const axios = require('axios');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    try {
    const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544')
    const { latitude, longitude } = response.data;
    console.log(response.data)

    
    res.render('index', { latitude, longitude })

    } catch(err) {
    console.error(err);
    res.status(500).send
}
})

app.listen(PORT, () => {
    console.log(`ISS location showing on localhost:${PORT}`)
});