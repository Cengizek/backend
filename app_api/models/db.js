var mongoose = require( 'mongoose' );

var dbURI='mongodb+srv://cengiz:Cengover56@mekanbul.5edxclq.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI);



mongoose.connection.on("connected",function(){
    console.log(dbURI+"adresindeki veritabanına bağlanıldı!\n");
});
mongoose.connection.on("error",function(){
    console.log(dbURI+"bağlantı hatası!\n");
});
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+"bağlantı kesildi!\n");
});
/*
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Bağlantı kapatıldı");
    process.exit(0);
});
*/

require("./venue"); 
