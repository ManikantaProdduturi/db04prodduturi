var express = require('express'); 
const Watches_controlers= require('../controllers/Watches'); 
var router = express.Router(); 
 
/* GET Watchess */ 
router.get('/', Watches_controlers.Watches_view_all_Page ); 
module.exports = router; 
// Handle Watches create on POST. 
exports.Watches_create_post = async function(req, res) { 
  console.log(req.body) 
  let document = new Watches(); 
  // We are looking for a body, since POST does not have query parameters. 
  // Even though bodies can be in many different formats, we will be picky 
  // and require that it be a json object 
  // {"Watches_type":"goat", "cost":12, "size":"large"} 
  document.Watches_type = req.body.Watches_type; 
  document.cost = req.body.cost; 
  document.size = req.body.size; 
  try{ 
      let result = await document.save(); 
      res.send(result); 
  } 
  catch(err){ 
      res.status(500); 
      res.send(`{"error": ${err}}`); 
  }   
}; 
