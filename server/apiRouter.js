let express = require('express');
let customerCtrl = require('./controllers/customerCtrl');
let countryCtrl = require('./controllers/countryCtrl');

//definition Rputer
exports.router = (function(){
    let apiRouter = express.Router();

    // api customer
    apiRouter.route('/customer/create').post(customerCtrl.create);

    // api country
    apiRouter.route('/country/list').get(countryCtrl.list);

    return apiRouter;
})();