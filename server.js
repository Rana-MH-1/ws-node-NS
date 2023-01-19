const http = require('http')
//console.log(http);
const server = http.createServer((req,res)=>{
  if(req.url=='/'){
    res.write('<h1>hello this is a ws of Home</h1>')
    res.end()
  }
  if(req.url=='/Profile'){
    res.write('<h1>hello this is a ws of Profile</h1>')
    res.end()
  }
})

const PORT = 5000;

server.listen(PORT, (err)=> err? console.log(err) : console.log(`Server is running on ${PORT}`))

