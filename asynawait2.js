//Async/Await


const fs= require('fs').promises;

const readFile=async()=>
    {
        try
        {
          const [data,data2]=await Promise.allSettled([
            fs.readFile('file.txt','utf8'),
            fs.readFile('data.txt','utf8')
          ])
          //const data2=await fs.readFile('data.txt','utf8')
          console.log(data)
          console.log(data2)
          console.log(data.status)
          

        }
        catch(err)
        {
            console.error(err);
        }
       // return fs.readFile('file1.txt','utf8')//return a promise
    }
    readFile()

    