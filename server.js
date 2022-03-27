const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const request = require('request')

const app = express()

app.use(bodyParser.json())
app.use(cors())


// send code
app.post('/send_code',(req,res) => {
    const {userCode} = req.body

    console.log(userCode)
    
    var program = {
        script : userCode,
        language: "c",
        versionIndex: "0",
        clientId: "3f0e67ba22680ea595dbbfb78b6de8fe",
        clientSecret:"b19dd35c4a684d99459f945beef0c459d498098e6434ce47c06608a18845b84c"
    };
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);

        res.json(body)
    });
})

app.listen(300)