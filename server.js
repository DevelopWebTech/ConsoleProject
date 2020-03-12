var express = require('express')
var app = express();
const joi = require('joi'); 
const helmet = require('helmet')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(helmet())
app.disable('x-powered-by')
app.use(helmet.hidePoweredBy())
require('dotenv').config()
app.set('view engine', 'ejs')
const cors = require('cors'); 
/*Database*/
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('data.json')
const db = low(adapter)
//NEDB
var Datastore = require('nedb')
  , base = new Datastore({ filename: 'data/datafile.json', autoload: true });


const userloginschema = joi.object().keys({
    userid: joi.string().alphanum().min(20).max(20).required(),
    userpass:joi.number().integer().min(12).max(20).required(),
    secretkey: joi.string().alphanum().min(5).max(10).required()
})
app.get('/', (req,res) => {
    res.render(__dirname + '/views/index.ejs')
})

module.exports = userloginschema;
const port = process.env.PORT || 4000;
app.listen(port,()=>{console.log(``)})