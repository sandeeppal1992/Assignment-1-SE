const express= require('express')
const upload = require('express-fileupload')
const app= express()
app.use(upload())
app.get('/',(req,res) => {
    res.sendfile(__dirname + '/index.html')
})

app.post('/',(req,res) => {
    if(req.files){
        console.log(req.files)
        var file=req.files.file
        var fileName= file.name
        console.log(fileName)

        file.mv('./uploads/'+fileName, function(err) { 
            if(err){
                res.send(err)
            } else {
                res.send(fileName+" has been Uploaded Successfully to Uploads")
            }
        })
    }
})

app.listen(5000)