const Todos = require ('../models/todoModel.js');
module.exports = function (app) {
    app.get('/api/setupTodos',function(req,res){
        const starterTodos= [ // this is the seed data, quick n dirtttttyyyy
            {
                username: 'dcarter' ,
                todo : 'Get new teachers that can code!',
                isDone : false,

            },
            {
                username:'dcarter',
                todo : 'clear stuff',
                isDone : true



            },

            {
                username : 'dcarter',
                todo : " make back dirty",
                isDone: false

            }
        ];
        Todos.create(starterTodos,function(err,results){
                res.send(results);
            }

        )
    })
};


// NOOO TYTPOS