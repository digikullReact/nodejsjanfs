const path  = require("path");
const fs=require("fs");
const os=require("os");
//console.log(os.platform(),os.arch(),os.freemem(),os.loadavg(),os.cpus());

//console.log("000000000000")
/*
fs.readFile("./files/f1.txt",'utf-8',(err,data)=>{
    if(err){
        // file operation is failed
        console.log(err);
    }
    else{
        console.log(data);
    }

})  */// used to read a file from your hard drive
//const filePath=path.join(__dirname,"files","f1.txt"); // using absoluet path to read the file --->
//const data=fs.readFileSync(filePath,'utf-8')  // 1Gb
//console.log(data);
//console.log("99999999999999")
// Async version of writing in file 

/** 
fs.writeFile("./files/f2.txt","Some other data -----",(err,data)=>{
    if(!err){
        console.log("SuccessFully Written in File")
    }else{
        console.log(err);
    }

})
*/
/*

fs.appendFile("./files/f2.txt","Some other data"+os.EOL,(err,data)=>{
    if(!err){
        console.log("SuccessFully Written in File")
    }else{
        console.log(err);
    }

})*/
//fs.appendFileSync("./files/f2.txt","Some other From synchronous");
//fs.writeFileSync("./files/f2.txt","Some other From synchronous")

// Deleting the file ---->

fs.unlink("./files/f2.txt",(err,data)=>{
    if(err) {
       // console.log(err);
    }
    else{
     //   console.log("file deleted");
    }

})
try {
    fs.unlinkSync("./files/something.txt")
} catch (error) {
    console.log("File not found");
}


const fs=require("fs");




function PromiseRead(){

  return new Promise((res,rej)=>{

    fs.readFile("./a.txgt",'utf-8',(err,data)=>{
  if(err){
    rej(err);
  }
  else{
    res(data);
  }
})
    
  
  
  
  })
}

PromiseRead().then(data=>{
  console.log(data);
}).catch(err=>{
  console.log(err);
})