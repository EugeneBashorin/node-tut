const express = require('express');
//1.18.38
const expressApp = express();

expressApp.use('*',(req,res) =>{
    console.log("был запрос от браузера");
    res.send("<h1>та заголовок H1 например</h1>")
})

const listener = expressApp.listen(4444, () =>{
    console.log(`Веб сервер на порте ${listener.address().port}`)
});