var fs =require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log('File Compressed.');

var data ='';
var outputData= "Simply Easy Learning";

var writerStream= fs.createWriteStream('output.txt');

writerStream.write(outputData, 'UTF8');

writerStream.end();

writerStream.on('finish', function(){
    console.log('Write completed.');
});

writerStream.on('error', function(err){
    console.log(err.stack);
});


console.log('Program Ended');