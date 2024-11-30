var express = require('express');
var router = express.Router();

const{MongoClient} = require("mongodb");
const uri= "mongodb+srv://sr20det31spr:r32r33r34@test.kkz50.mongodb.net/?retryWrites=true&w=majority&appName=test";
const client= new MongoClient(uri);
router.get('/', async(req, res) =>{
// データベース、コレクションを指定
const database= client.db('notes');
const notes= database.collection('notes');
// idが１のドキュメントを取得
const query= { id: 2 };
const note= await notes.findOne(query);
res.json(note);
})
module.exports= router;