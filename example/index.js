window.fs = require('../');

// read / write sync
fs.writeFileSync('pt1.txt', 'Begin at the beginning, ');
var pt1 = fs.readFileSync('pt1.txt');

// write stream
var ws = fs.createWriteStream('pt2.txt');
ws.write('and go on ');
ws.write('till you come to the end: ');
ws.end('then stop');

// read stream
var rs = fs.createReadStream('pt2.txt');
var pt2 = rs.read().toString();

console.log('"' + pt1 + pt2 + '"');