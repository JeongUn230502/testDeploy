const {spawn} = require('child_process');


const result = spawn('python', ["/Users/data.ly/Desktop/BuildTest/test/src/test.py"]);

result.stdout.setEncoding('utf-8'); // Set encoding to handle Unicode characters


result.stdout.on('data', function() {
    let data;
    while (( data = result.stdout.read()) !== null) {
        console.log(data.toString())  
    }
})

result.stderr.on('data', function(data) {
    console.error(data.toString())
})

result.on('exit', function(code) {
    console.log('Child process exited with code ' + code)
})
