// //Module
// // const math = require('./math.js');

// // const result = math.sum(1, 2);

// // console.log(result);

// //Synchronous code
// const fs = require('fs');

// // const data = fs.readFileSync('./data.txt', 'utf8') 
// //readFileSync : 파일경로 뒤에 객체 또는 utf8입력하면 해당 경로에 있는 파일에 있는 문자열 출력 가능

// const data = fs.readFile('./data.txt', 'utf8', function(err, data) {
//     console.log(data); 
// })
// //비동기 함수 사용 + 콜백함수 많이 사용함

// //console.log(data); //readFileSync에서 'utf8' 미입력시 버퍼값 출력

//https://nodejs.org/api/synopsis.html
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n');
    }
    else if(req.url === '/users'){
        res.statusCode = 200;
        res.setHeader('Contenet-Type', 'text/plain');
        res.end('User list\n');
    }
    else {
        res.statusCode = 404;
        res.end('Not Found\n');
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//curl -X GET 'localhost:3000' 입력 시 'Hello, World' 출력됨