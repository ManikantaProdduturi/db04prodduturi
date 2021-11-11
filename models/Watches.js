const mongoose = require("mongoose") 
const WatchesSchema = mongoose.Schema({ 
    WName: String, 
    WSize: String, 
    WCost: Number 
}) 
 
module.exports = mongoose.model("Watches", 
WatchesSchema)