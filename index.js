const express = require('express'),   path = require("path");

const app = express();
app.use(express.static("client"));
app.get('/',(req,res)=>{
    res.sendFile("index.html", {
        root: path.join(__dirname, "/client")
    })
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log("Started"));