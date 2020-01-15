let prompt = require("prompt-sync")();
const args = process.argv.splice(2);
const fs = require('fs');
const request = require('request');

//const readline = require('readline')      //
// const rl = readline.createInterface({    //
//      input: process.stdin,               //
//      output: process.stdout              //
//  });                                     //



  request(args[0], (error, response, body) => {
//File needs to know it exists, and reprompt for an overwrite
//prompt?
    console.log(error);
    //
    fs.stat(("index.html"), (error, stat) => {
        if (error) { return console.log(error)};
        //
        ///This is the amount of Bytes///
        const stats = fs.statSync(args[1]);
        let fileSizeInBytes = stats["size"];
        //
        const indexFile = (args[1]);
        console.log(args[1]);
        //
          //  console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${args[1]}`);
        //                                                                          //
        //                                                                          //
        
        if(error == null) {
            //this means the file exist
            //do you want to overwrite?
            console.log("are you sure you want to overwrite? Y/N");
            let yesno = prompt(">   ");
                if(yesno === "y" || yesno === "Y") {
                    fs.writeFile(('index.html', body,() => {

                    }))
                }

        } else if(error.code === 'ONOENT') {
            //this means the file exists//
            console.log("doesnt exist");
        } else {
            console.log("other error: ", error.code);
       
       
        }
    })
   
    
  });


//{flag: 'wx'} in FS write file , 
    //fs.writeFile(args[1], (file, body,{options}) => {}

    
