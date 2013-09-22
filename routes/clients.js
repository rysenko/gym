var model = require('../models/client');
var router = require('./crud')(model);
module.exports = router;