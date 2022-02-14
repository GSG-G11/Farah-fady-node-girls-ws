const path=require('path')
const fs=require('fs');
const homeHandler=(response)=>{
    const filePath=path.join(__dirname,'..','..','public','index.html')
        fs.readFile(filePath,(error,data)=>{
            if(error){
                console.log(error);

            }
            else{
                response.writeHead(200,{'Content-type':'text/html'})

                response.end(data);
            }
        })
}
module.exports=homeHandler;