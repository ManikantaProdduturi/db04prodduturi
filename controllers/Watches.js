var Watches = require('../models/Watches'); 
 
// List of all Watchess 
exports.Watches_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Watches list'); 
}; 
 
// for a specific Watches. 
// for a specific Watches. 
exports.Watches_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Watches.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
//exports.Watches_update_put = async function(req, res) { 
    //Handle Watches update form on PUT. 

    // Handle Watches update form on PUT. 
exports.Watches_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Watches.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.WName)  
               toUpdate.WName = req.body.WName; 
        if(req.body.WCost) toUpdate.WCost = req.body.WCost; 
        if(req.body.WSize) toUpdate.WSize = req.body.WSize; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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
    //We are looking for a body, since POST does not have query parameters. 
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
// for a specific Watches.

// Handle Watches delete on DELETE. 
exports.Watches_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Watches.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};
// Handle a show one view with id specified by query 
exports.Watches_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Watches.findById( req.query.id) 
        res.render('Watchesdetail',  
{ title: 'Watches Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

 // Handle building the view for creating a Watches. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Watches_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Watchescreate', { title: 'Watches Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a Watches. 
// query provides the id 
exports.Watches_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Watches.findById(req.query.id) 
        res.render('Watchesupdate', { title: 'Watches Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.Watches_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Watches.findById(req.query.id) 
        res.render('Watchesdelete', { title: 'Watches Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};