// add a simple method to get to database

const configValues = require('./config.json');
module.exports =
    {
        // (anon) method to get database url, get db connection

        getDbConnectionString: function () {
            //mongodb://<dbuser>:<dbpassword>@ds251362.mlab.com:51362/nodetodo
            return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds151612.mlab.com:51612/nodetodo2';

            //           return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds151402.mlab.com:51402/nodetodo2?authSource=nodetodo2&w=1';

            // need pw to connect
        }

    };