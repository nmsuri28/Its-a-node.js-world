var fs = require ('fs');
fs.readFile('input.txt', function(err, data){
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
});

console.log('Hello World!');