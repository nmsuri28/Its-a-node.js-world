var buf = new Buffer(26);
for(var i = 0; i<26; i++){
    buf[i]= i +97;
}

var buffer1 = new Buffer('TutorialsPoint');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1, buffer2]);

var buffer4 = new Buffer('ABC');
var buffer5 = new Buffer('ABCD');
var result = buffer4.compare(buffer5);

var buffer6 = new Buffer('ABC');

var buffer7 = new Buffer(3);
buffer6.copy(buffer7);

var buffer8 =new Buffer('TutorialsPoint');
var buffer9 = buffer8.slice(0,9);
var buffer10 = new Buffer('TutorialsPoint');

if(result < 0){
    console.log(buffer4 + " comes before " + buffer5);
}else if (result === 0){
    console.log(buffer4 + " is the same as " + buffer5);
}else{
    console.log(buffer4 + ' comes after ' + buffer5);
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0,5));
console.log(buf.toString('utf8', 0,5));
console.log(buf.toString(undefined, 0,5));
console.log('Buffer3 content: ' + buffer3.toString());
console.log('buffer7 content ' + buffer7.toString());
console.log('buffer9 content: ' + buffer9.toString());
console.log('buffers10 length: ' + buffer10.length);