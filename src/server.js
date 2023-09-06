// const express = require('express')
// const app = express()
// const path = require('path')
// const port = 3000;
// const staticpath = path.join(__dirname,"../public")
// app.use(express.static(staticpath))

// // app.get('/', (req, res) => {
// //   res.sendFile('index.html',{root: path.join(__dirname)})
// // })
// app.get('/', (req, res) => {
//   res.render('index')
// })
const express = require('express');
const app=express();
const path =  require('path')
const hbs  = require('hbs')
const port = process.env.PORT||4000;

const staticPath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set("view engine","hbs")

app.set('views',templatePath)
app.use(express.static(staticPath))
hbs.registerPartials(partialsPath)

app.get("/",(req,res)=>{
    res.render('index')
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})