const args = process.argv.splice(2);
const fs = require('fs');
const request = require('request');
//console.log(args);

  request(args[0], (error, response, body) => {
   
    fs.writeFile(args[1], body, () => {
      if(error) { return console.log(error)};

        const stats = fs.statSync(args[1]);
        let fileSizeInBytes = stats["size"];

        console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${args[1]}`);

    
    })
    
  });


//{flag: 'wx'} in FS write file , 
    //fs.writeFile(args[1], (file, body,{options}) => {}

