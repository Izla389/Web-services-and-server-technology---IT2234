const {createServer} = require('node:http');

const localhost ='127.0.0.1';
const port = 3000;

const server = createServer ((req,res)=>
{
    res.statusCode =200;
    res.setHeader('content-Type', 'text/plain')
    res.end("Hello Node 35");
});

server.listen(port,localhost,()=>
{
    console.log(`Running on:${localhost}:${port}`);
});

