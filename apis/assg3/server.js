const express= require("express");
const app= express();
const fs= require("fs");

app.use(express.static("public"));
app.use("/images", express.static("images"));


app.get('/prods', (req, res) =>{
fs.readFile("prods.json", "utf-8", (err, data) =>{
 if(err) return res.status(500).send("Error reading file");
res.json(JSON.parse(data));

});
});

app.listen(8080, () =>{
console.log("server running on http://localhost:8080");
});