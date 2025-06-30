const Product = require('../models/Product');

exports.ajouterProduit = async (req, res) => {
  try {
    const produit = new Product(req.body);
    const saved = await produit.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getProduitParId = async (req, res) => {
  try {
    const produit = await Product.findById(req.params.id);
    if (!produit) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json(produit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getProduits = async (req, res) => {
  const produits = await Product.find();
  res.json(produits);
};

exports.updateProduit = async (req, res) => {
  try {
    const produit = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(produit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProduit = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Produit supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

