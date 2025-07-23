const {model }=require('mongoose');
const {HoldingsSchema} = require('../schemas/HoldingsSchema');
const HoldingsModel = model('Holding', HoldingsSchema);

module.exports = { HoldingsModel };
// This model interacts with the MongoDB database to perform CRUD operations on the holdings data.