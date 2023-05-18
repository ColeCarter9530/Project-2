const router = require('express').Router();
const user = require('../../models/user');

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
  res.status(200).json(userData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;