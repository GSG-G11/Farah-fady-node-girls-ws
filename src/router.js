const fs=require('fs');
const path=require('path')
const homeHandler=require('./handler/homeHandler.js')
const publicHandler=require('./handler/publicHandler.js')
const  JSONHandler=require('./handler/handlerJson');
const querystring = require('querystring');const router =(request,response)=>{

    const endPoint=request.url;
    const method=request.method;
    if (endPoint==='/'){
        homeHandler(response);
    }

    else if(endPoint=== "/public/img/logo1.png"){
      
        publicHandler(response,endPoint);
    }

    else if(endPoint=== "/public/main.css"){
        publicHandler(response,endPoint);
     
    }
    else if(endPoint === '/create-post'&& request.method ==="POST"){
        let AllData="";
        request.on('data',chuckdata=>{
            AllData+=chuckdata;
        })
       request.on('end',()=>{
      
        const convertedData = querystring.parse(AllData);
      
        const jsonFile=path.join(__dirname,'..','posts.json')
        fs.readFile(jsonFile,(error,data)=>{
            if(error){
                console.log(error)
            }
            else{
                const object =JSON.parse(data);
                object[Date.now()]= convertedData.post;
                fs.writeFile(jsonFile,JSON.stringify(object),error=>{
                    console.log(error);
                })
            }
        })
     
        response.writeHead(303,{"Location":"/"});
            response.end();
        })
    }
    else if(endPoint === "/public/script.js"){
        publicHandler(response,endPoint);
    }
    else if(endPoint==="/posts"){
        JSONHandler(response)
    }
    else if(endPoint=== "/public/img/logo2.png"){
        publicHandler(response,endPoint);  
    }
    else{
        response.writeHead(404)
        response.end('not Found');
    }


}
module.exports=router;