const path=require('path')
const fs=require('fs');
const type={
    css:"text",
    jpg:"image",
    png:"image",
    js:"text"
}
const publicHandler=(response,url)=>{
    const extension =url.split(".")[1];
  
    const filePath=path.join(__dirname,'..','..',url)
    fs.readFile(filePath,(error,data)=>{
        if(error){
            console.log(error);

        }
        else{
            response.writeHead(200,{'Content-type':`${type[extension]}/${extension}`})

            response.end(data);
        }
})
}
module.exports=publicHandler;