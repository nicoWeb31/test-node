module.exports = (req,res) =>{

    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Welcome</title></head>')
        res.write('<head><title>Welcome</title></head>')
        res.write('<body><h1>exercice</h1><form action="/create" method="POST"><input type="text" name="username"/><button type="submit">submit</button></form></body>')
    
        res.write('</html>')
        return res.end();

    }
    if(req.url === '/users'){

        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Welcome</title></head>')
        res.write('<ul><li>user1</li></ul>')
        res.write('</html>')
        return res.end();
        

    

    }
    if(req.url === '/create' && req.method === 'POST'){
        const body =[];
        req.on('data',(chunk)=>{
            body.push(chunk)
        })
        req.on('end',()=>{
            const bodyPareser = Buffer.concat(body).toString();

            const message = bodyPareser.split('=')[1]
            console.log(message)
        })
        res.statusCode =302;
        res.setHeader('Location','/')
        return res.end();
        
            
    }




}