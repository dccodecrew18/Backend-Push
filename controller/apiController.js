//hanles all requests
const Todos =require('../models/todoModel');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true})) // does decoding for you , app is a ref to express
app.use(bodyParser.json()) //
module.exports = function(app){
    // the routes
    //app.// routes for the api, database opperation
    app.get('/api/todos/:uname', function(req , res){
        Todos.find({username:req.params.uname},function (err,todos){

            if (err){
                throw err;
            }

            else
            {
        }
            // we got results
            res.send(todos);
        })









    }