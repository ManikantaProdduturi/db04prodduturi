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

/* GET detail Watches page */ 
router.get('/detail', Watches_controller.Watches_view_one_Page);

/* GET create Watches page */ 
router.get('/create', Watches_controller.Watches_create_Page); 

/* GET create update page */ 
router.get('/update', Watches_controller.Watches_update_Page);

/* GET create Watches page */ 
router.get('/delete', Watches_controller.Watches_delete_Page);
 
module.exports = router; 


