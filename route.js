const fs = require('fs')



module.exports.toto  = (req,res) =>{

    const url = req.url
    const methode =req.method

    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>toto</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">submit</button></form></body>')
    
        res.write('</html>')
        return res.end();
    }
    
    
    if(url === '/message' && methode ==='POST'){
        const body =[];
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end',()=>{
            const bodyPareser = Buffer.concat(body).toString();
            console.log(bodyPareser)
            const message = bodyPareser.split('=')[1]
            fs.writeFile('datafromClient.txt',message,(err)=>{
    
                res.statusCode =302;
                res.setHeader('Location','/')
                return res.end();
            })
            
        })
    }
    
    
    //console.log(req.url,req.method,req.headers)
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>toto</title></head>')
    res.write('</html>')
    res.end();
}




