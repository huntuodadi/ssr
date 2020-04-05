const fs = require('fs');
const rs = fs.createReadStream('./test.md', {highWaterMark: 18});
let data  ='';
rs.on('data', function(chunk) {
  console.log(chunk.toString());
  data += chunk;
})
rs.on('end', function() {
  console.log(data);
})