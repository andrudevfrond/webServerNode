const http = require('http');
console.clear();

http.createServer((request, response)=> {
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, {'Content_Type': 'application/csv'});

    // const persona = {
    //     id: 1,
    //     nombre: 'carlos'
    // };

    //response.write( JSON.stringify(persona));
    // response.write('id, nombre\n');
    // response.write('1, flor\n');
    // response.write('2, diana\n');
    // response.write('3, andres\n');
    response.write('Hola mundo');
    response.end();
}).listen(8080);

console.log('escuchando el puerto. ', 8080); 


