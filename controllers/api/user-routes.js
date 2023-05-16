const router = require('express').Router();
const user = require('../../models/user');

// route to create/add a dish using async/await
router.post('/', async (req, res) => {
  try { 
    const userData = await user.create({
    user_id: req.body.user_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    state: req.body.state,
    city: req.body.city,
    street_address: req.body.street_address
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json(userData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;