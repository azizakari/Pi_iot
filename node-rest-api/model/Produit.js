const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Book = new Schema({
  name: {
    type: String
  },
  
}, {
  collection: 'produit'
})
module.exports = mongoose.model('Produit', Produit)