const express = require("express");
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));
const db = require("./data/db");


app.use("/coin/:id", async function(req, res){
    try{
        const [product,] = await db.execute("select*from coinler where id=?", [req.params.id]);
        res.render("coin-bilgi",{
           coin: product[0]
       }); 
   }
   catch(err){
       console.log(err);
   }
});
app.use("/coin", async function(req, res){
    try{
        const [coins,] = await db.execute("select*from coinler");
        res.render("coin",{
           liste5: coins
       }); 
   }
   catch(err){
       console.log(err);
   }
});
app.use("/indikator_kilavuz", async function(req, res){
    try{
        const [indikk,] = await db.execute("select*from indikator_kilavuz");
        res.render("indikator_kilavuz",{
           liste4: indikk
       }); 
   }
   catch(err){
       console.log(err);
   }
});
app.use("/indikator", async function(req, res){
    try{
        const [indik,] = await db.execute("select*from indikator");
        res.render("indikator",{
           liste2: indik
       }); 
   }
   catch(err){
       console.log(err);
   }
});
app.use("/grafik", async function(req, res){
    try{
        const [grafik,] = await db.execute("select*from grafik");
        res.render("grafik",{
           liste3: grafik
       }); 
   }
   catch(err){
       console.log(err);
   }
});
app.use("/", async function(req, res){
    try{
        const [products,] = await db.execute("select*from coinler WHERE isHome=1");
        res.render("index",{
            liste: products
        }); 
    }
    catch(err){
        console.log(err);
    }
});
app.listen(3000, () => {
    console.log("3000 port ");

});
