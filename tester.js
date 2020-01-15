const args = process.argv.splice(2);
const fs = require('fs');
const request = require('request');
const readline = require('readline')
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });



  request(args[0], (error, response, body) => {
//File needs to know it exists, and reprompt for an overwrite
//prompt?
    console.log(error);
fs.stat((args[1]), (error, stat) => {
        if (error) { return console.log(error)};
        const stats = fs.statSync(args[1]);
        let fileSizeInBytes = stats["size"];
        const indexFile = (args[1]).toString();
        
          //  console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${args[1]}`);
        //                                                                          //
        //                                                                          //
        
        if(error == null) {
            //this means the file exist
            //do you want to overwrite?
            rl.question("The file already exists, do you want to overwrite? Y/N", (yesno) => {
                if(yesno === "y" || yesno === "Y") {
                    fs.writeFile((indexFile, body,() => {
                    }))
                } else {
                    console.log("byebye");

                }
            })

        } else if(error.code === 'ONOENT') {
                //apparently this means file doesn't exist
                console.log("doesnt exist");
        } else {
            console.log("other error: ", error.code);
       
       
        }
    })
   
    
  });


//{flag: 'wx'} in FS write file , 
    //fs.writeFile(args[1], (file, body,{options}) => {}

    
