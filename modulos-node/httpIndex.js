import htpp from "http";

htpp.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/teste') {
        res.write("GET - /teste com sucesso");
    } else {
        res.write("Hello word");
    }
    res.statusCode = 200;
    res.end();
}).listen(8080);