var express = require('express'); 
const Watches_controlers= require('../controllers/Watches'); 
var router = express.Router(); 
 
/* GET Watchess */ 
router.get('/', Watches_controlers.Watches_view_all_Page ); 
module.exports = router; 

// GET request for one costume. 
router.get('/Watches/:id', Watches_controlers.Watches_detail); 
 