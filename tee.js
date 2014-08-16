var fs      = require('fs'),
    output1 = fs.createWriteStream(process.argv[2]);

process.stdin.pipe(process.stdout);
process.stdin.pipe(output1);
