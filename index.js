const express = require('express');
const app = express();

function logger(req, res, next){
    console.log('i am logger'); //클라이언트가 접속 시 서버에 나오는 문구
    next();
}

function logger2(rea, res, next){
    console.log('i am logger2');
    next();
}

app.use(logger); //미들웨어
app.use(logger2);

app.listen(3000, function(){
    console.log('Server is running'); //index.js 실행 시 서버에 나오는 문구
})