const args = process.argv.splice(2);
const fs = require('fs');
const request = require('request');
// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

//console.log(args);

  request(args[0], (error, response, body) => {
    
    fs.writeFile((args[1].toString()), body, () => {
      if(error) { return console.log(error)};
        const stats = fs.statSync(args[1]);
        let fileSizeInBytes = stats["size"];
        console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${args[1]}`);
        //
        //
        fs.stat((args[1]), (err, stat) => {
            if(err == null) {
                //this means the file exist
                console.log("file exists")
                //do you want to overwrite?

            } else if(err.code === 'ONOENT') {
                    //apparently this means file doesn't exist
                    console.log("doesnt exist");
            } else {
                console.log("other error: ", err.code);
           
           
            }
        })

    })
    
  });

//{flag: 'wx'} in FS write file , 
    //fs.writeFile(args[1], (file, body,{options}) => {}

    ///////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    fs.writeFile((args[1]), body,{flag: "wx"},() => {
        let indexFile = args[1];
      if(error) { return console.log(error)};
        const stats = fs.statSync(args[1]);
        let fileSizeInBytes = stats["size"];
        console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${args[1]}`);
        //
        //
        fs.stat((args[1]), (err, stat) => {
            if(err == null) {
                //this means the file exist
                //do you want to overwrite?
                rl.question("The file already exists, do you want to overwrite? Y/N", (yesno) => {
                    if(yesno === "y" || yesno === "Y") {
                        fs.writeFile((indexFile, body, () => {
                        }))
                    } else {
                        console.log("byebye");

                    }
                })

            } else if(err.code === 'ONOENT') {
                    //apparently this means file doesn't exist
                    console.log("doesnt exist");
            } else {
                console.log("other error: ", err.code);
           
           
            }
        })

    })
    
  });    
