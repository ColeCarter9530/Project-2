const router = require('express').Router();
const user = require('../models/user');

router.get('/', async (req, res) => {
    const userData = await user.findAll().catch((err) => {
        res.json(err);
    });
    const users = userData.map((user) => user.get({ plain: true}));
    res.render('all', {users});
});

router.get('/dish/:id', async (req, res) => {
    try {
    const userData = await user.findByPK(req.params.id);
    if(!userData) {
        res.status(404).json({message: "Please set up an account to continue."});
        return;
    }
    const user = userData.get({ plain: true });
    res.render('user', user);
} catch (err) {
    res.status(500).json(err);
};
});

module.exports = router;