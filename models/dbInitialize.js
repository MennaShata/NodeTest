const mongoose = require ('mongoose');
let mongo_url = 'mongodb://localhost/myapp';

if(process.env.NODE_ENV==='production'){
    mongo_url="mongodb://ashba7_UI:ashba7_UI@ds253879.mlab.com:53879/myapp"
}
 mongoose.connect(mongo_url)

