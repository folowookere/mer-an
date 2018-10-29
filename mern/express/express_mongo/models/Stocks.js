const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StocksSchema = new Schema({
    name: {
        type: String,
    },
    symbol: {
        type: String,
        required: true,
    },
    lastprice: {
        type: Number,
    },
    markettime: {
        type: Date,
        default:Date.now,
    },
    dayrange: {
        type:[Number],
        default:undefined,
    },
    marketcap: {
        type:Number,
    },
    
});

module.exports = Stock = mongoose.model("stocks", StocksSchema);