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
router.post('/Watches', Watches_controller.Watches_create_post); 
 
// DELETE request to delete Watches. 
router.delete('/Watches/:id', Watches_controller.Watches_delete); 
 
// PUT request to update Watches. 
router.put('/Watches/:id', 
Watches_controller.Watches_update_put); 
 
// GET request for one Watches. 
router.get('/Watches/:id', Watches_controller.Watches_detail); 
 
// GET request for list of all Watches items. 
router.get('/Watches', Watches_controller.Watches_list); 
 
module.exports = router; 
