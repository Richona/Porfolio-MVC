const express = require("express");
const app = express();
const path=require("path");
const port=3030;

/* motor de vista */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* archivos estaticos */
app.use(express.static(path.resolve(__dirname,"public")) );

/* RUTAS */
const mainRouter = require("./routes/main")

app.use("/", mainRouter)


/* Server up */
app.listen(port, ()=>{
    console.log(`Server running in http://localhost:${port}`);
})