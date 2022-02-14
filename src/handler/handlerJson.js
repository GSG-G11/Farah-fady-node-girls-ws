const path=require('path')
const fs=require('fs');

const JSONHandler=(response)=>{
   
  
    const filePath=path.join(__dirname,'..','..', 'posts.json')
    fs.readFile(filePath,(error,data)=>{
        if(error){
            console.log(error);

        }
        else{
            response.writeHead(200,{'Content-type':'application/json'})
                    console.log("data",data);
            response.end(data);
        }
})
}
module.exports=JSONHandler;