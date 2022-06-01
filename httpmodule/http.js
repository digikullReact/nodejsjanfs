require("dotenv").config();
const http=require("http");  // its a common js import of http module
const fs=require("fs");
const port=process.env.PORT || 9000;

/// for applying cors in traditional way 



function requsetListner(req,res){
   // console.log(req);


    // Need to see why post request is not working ----->

    // you can use expreess  cors
    const headers={

        'Access-control-Allow-Origin':'*',
        'Access-control-Allow-Methods':'OPTIONS,POST,GET',

    }

   // console.log(req.method);

   // preflight requets ---

   // Its a pre flight request which 

   // it is totaly done by browsers
/*
   if (req.method =="OPTIONS" ){
       res.writeHead(204,headers);
       res.end();

       return;

   }
*/

///preflight request

  if (req.method =="OPTIONS"){
    res.writeHead(204,headers);
    res.end();

    return;

}

    if(req.method=="POST" && req.url=="/postuser")
     {
        //document.getElmentById.addEventlistner("click",())
        // oChange ,onClick
          /// HAndling the post data  ----

          var body = '';

          req.on('data', function (data) {
            ///  console.log(data);
              body += data;
              //console.log(body);
         
          
          });

          

          // Event driven and asynchronous 
          console.log("hii");
          for(let i=0;i<10;i++){

          }
  
          req.on('end', function () {
              console.log(body);
              req.body=body;
              res.writeHead(200,headers);

              res.write(req.body);
              res.end(); 
      
 

           // finishing the request response cycle -->
           
          });
          


    }

   else if(req.method=="GET" && req.url=="/"){
         res.writeHead(200,headers);
 
        res.write("Hello world From backend !!!!!")  // this sends an resposne an html
        res.end();  // this stops the response stream

    }

   else if(req.method=="GET" && req.url=="/user"){
        res.write("<h1>HEllo USer</h1>")
        res.end(); 
   }

   else if(req.method=="GET" && req.url=="/html"){

    fs.readFile("./inde.html",'utf-8',(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});// adding the status code 200 and the content type as text/html
            res.write("Not found")
    
            res.end();   

        }
        else{

            res.writeHead(200,{'Content-Type':'text/html'});// adding the status code 200 and the content type as text/html
            res.write(data)
    
            res.end();   // its is used to end up the response cycle
        }


       


    })
 
   
}



        else if(req.method=="POST" && req.url=="/user"){
            res.write("<h1>HEllo USer</h1>")
            res.end(); 
    
        }    
    
    }








const server=http.createServer(requsetListner);  // Request listsner would be passed


server.listen(port,function(){
    console.log("Server started")
});