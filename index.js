const http = require('http');
const fs =require('fs');
const arg=require('minimist')(process.argv.slice(2));



http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html' 
    });
    res.end('hello world');

    function getFileContent(fileName){
        fs.readFile(`./${fileName}`, 'utf-8',(err,data)=>{
            if(err){
               console.log(`${fileName} not found`);
            }else{
               console.log(data);
            }
        });
    }

    if(arg.e || arg.hello){
        fs.readFile('hello.txt', 'utf8', (err, data) => {
            const fileName=arg.e || arg.hello;
        getFileContent(`${fileName}.txt`)
        })
        
    }
     if(arg.e || arg.main){
        fs.readFile('main.html', 'utf8', (err, data) => {
            const fileName=arg.e || arg.main;
        getFileContent(`${fileName}.html`)
        })
     } 
    }).listen(8080)
