var Watches = require('../models/Watches'); 
 
// List of all Watchess 
exports.Watches_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Watches list'); 
}; 
 
// for a specific Watches. 
exports.Watches_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Watches detail: ' + req.params.id); 
}; 
 
// Handle Watches create on POST. 
exports.Watches_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Watches create POST'); 
}; 
 
// Handle Watches delete form on DELETE. 
exports.Watches_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Watches delete DELETE ' + req.params.id); 
}; 
 
// Handle Watches update form on PUT. 
exports.Watches_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Watches update PUT' + req.params.id); 
}; 
// List of all Watchess 
exports.Watches_list = async function(req, res) { 
    try{ 
        theWatchess = await Watches.find(); 
        res.send(theWatchess); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.Watches_view_all_Page = async function(req, res) { 
    try{ 
        theWatchess = await Watches.find(); 
        res.render('Watches', { title: 'Watches Search Results', results: theWatchess }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle Watches create on POST. 
exports.Watches_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Watches(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Watches_type":"goat", "cost":12, "size":"large"} 
    document.WName = req.body.WName; 
    document.WSize = req.body.WSize; 
    document.WCost = req.body.WCost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 