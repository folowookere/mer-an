// var msg = "Hello world";
// console.log(msg);

// var http = require('http');  How to require modules
// Streaming and reading files
// http.createServer(function(request, response) {
 // Status code in header    response.writeHead(200);
  // Can replace all code below with pipe   request.pipe(response);
//     request.on('readable', function() {
//         var chunk = null;
//         while (null !==(chunk = request.read())) {
//            response.write(chunk);
//         }
//     });
//    request.on('end', function() {
//     response.end(); // Close the connection
//    }); 
  
 // }).listen(8080); Listen for connections on this port


// Uploading files and seeing progress

var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
    var newFile = fs.createWriteStream("readme_copy.md");
    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0;
    request.on('readable', function() {
        var chunk = null;
        while(null !== (chunk = request.read())) {
            uploadedBytes += chunk.length;
            var progress = (uploadedBytes / fileBytes) * 100;
            response.write("progress: " + parseInt(progress, 10) + "%\n");
        }
    });
    request.pipe(newFile);

    request.on('end', function() {
        response.end('uploaded!')
    });
}).listen(5500);
console.log("Listening on port 5500");