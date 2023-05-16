const router = require('express').Router();
const products = require('../../models/user');

router.post('/', async (req, res) => {
  try { 
    const productData = await products.create({
    product_id: req.body.product_id,
    product_name: req.body.product_name,
    product_category: req.body.product_category,
    product_price: req.body.product_price
  });
  res.status(200).json(productData)
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;