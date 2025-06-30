const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prix: { type: Number, required: true },
  description: {type: String, required: true},
  //enStock: { type: Boolean, default: true },
  Stock: { type: Number, required: true}
});

module.exports = mongoose.model('Product', productSchema);
