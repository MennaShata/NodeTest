const mongoose = require ('mongoose');
let mongo_url = 'mongodb://localhost/myapp';

if(proccess.env.NODE_ENV==='production'){
    mongo_url="mongodb://<dbuser>:<dbpassword>@ds253879.mlab.com:53879/myapp"
}
 mongoose.connect(mongo_url)

