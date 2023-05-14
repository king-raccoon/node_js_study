//Module
// const math = require('./math.js');

// const result = math.sum(1, 2);

// console.log(result);

//Synchronous code
const fs = require('fs');

// const data = fs.readFileSync('./data.txt', 'utf8') 
//readFileSync : 파일경로 뒤에 객체 또는 utf8입력하면 해당 경로에 있는 파일에 있는 문자열 출력 가능

const data = fs.readFile('./data.txt', 'utf8', function(err, data) {
    console.log(data); 
})
//비동기 함수 사용 + 콜백함수 많이 사용함

//console.log(data); //readFileSync에서 'utf8' 미입력시 버퍼값 출력