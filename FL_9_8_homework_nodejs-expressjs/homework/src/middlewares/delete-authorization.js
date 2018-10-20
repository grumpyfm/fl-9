const express = require('express');
const app = express();

app.delete('../../db/data.json',function (request,response, next) {
    if(request.header ==='X-Password qwerty'){
        next()
    }else {
        response.send('401 Unauthorized')
    }
});