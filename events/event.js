const EventEmitter = require('node:events');

const axios=require("axios");

const myEmitter = new EventEmitter();

// to emit an event -->
myEmitter.on("sell",(data)=>{
    //console.log("Just chilling here ",data);
// can send an email ,can send a notification -->
console.log("selling 1")
})
///myEmitter.emit("chillingout","Hey I am chilling");


// to emit an event -->
myEmitter.on("sell",(data)=>{
    //console.log("Just chilling here ",data);
// can send an email ,can send a notification -->
console.log("selling 2")
})
// 

// to emit an event -->
myEmitter.on("sell",(data)=>{
    //console.log("Just chilling here ",data);
// can send an email ,can send a notification -->
console.log("selling 3")
})


function customCheckIphonePrice(){

    axios.get("https://www.amazon.in/Apple-iPhone-13-128GB-Midnight/dp/B09G9HD6PD/ref=sr_1_1_sspa?crid=8TWNF059PGS1&keywords=iphone%2B13&qid=1654074628&sprefix=iphone%2B13%2Caps%2C216&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyM1lEWUNZNDE2VDBWJmVuY3J5cHRlZElkPUEwNDQyODQ3MjZOS00zMzlQRE1LQiZlbmNyeXB0ZWRBZElkPUEwODcyNzYwMUhEVFBCM1JUVkk5MSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1").then(

        response=>{
       //   console.log(response.data);

          //  --checking out price

          if (price<10000){
           
          }
      }
    ).catch(err=>{
        console.log(err);
    })



    
}

customCheckIphonePrice();