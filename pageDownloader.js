let prompt = require("prompt-sync")();
const args = process.argv.splice(2);
const fs = require('fs');
const request = require('request');
request(args[0], (error, response, body) => {

  if (response.statusCode < 200 || response.statusCode > 203) {
    console.log(response.statusCode);
    process.exit();
  }

  fs.stat(args[1], (error, stat) => {
        
    if (error === null) {
      //this means the file exist
      console.log("are you sure you want to overwrite? Y/N");
      let input = prompt(">   ");
      if (input === "y" || input === "Y") {
        fs.writeFile(args[1], body,() => {

          if (error) {
            return console.log(error);
          }
          console.log("File has been overwritten!");
          console.log(`Downloaded and saved ${stat.size} bytes to ${args[1]}`);
        });
      } else if (input === 'n' || input === 'N') {
        console.log("Didn't overwrite any files");
      }

    } else if (error.code === 'ENOENT') {
      //this means the file doesnt  exists//
      fs.writeFile(args[1], body, () => {
        console.log(`Downloaded and saved`);
      });
    } else {
      //if invalid, log all errors.
      console.log("other error: ", error.code);
       
    }
  
  });
   
});



