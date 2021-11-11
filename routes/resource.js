var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Watches_controller = require('../controllers/Watches'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Watches ROUTES /// 
 
// POST request for creating a Watches.  
router.post('/Watchess', Watches_controller.Watches_create_post); 
 
// DELETE request to delete Watches. 
router.delete('/Watchess/:id', Watches_controller.Watches_delete); 
 
// PUT request to update Watches. 
router.put('/Watchess/:id', 
Watches_controller.Watches_update_put); 
 
// GET request for one Watches. 
router.get('/Watchess/:id', Watches_controller.Watches_detail); 
 
// GET request for list of all Watches items. 
router.get('/Watchess', Watches_controller.Watches_list); 
 
module.exports = router; 