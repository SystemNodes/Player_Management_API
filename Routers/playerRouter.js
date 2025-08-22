const router = require('express').Router();
const {
    createPlayer, 
    allPlayer, 
    eachPlayer, 
    updatePlayer,
    deletePlayer
} = require('../Controllers/playerController');

router.post('/player', createPlayer)
router.get('/player', allPlayer)
router.get('/player/:id', eachPlayer)
router.put('/player/:id', updatePlayer)
router.delete('/player/:id', deletePlayer)

module.exports = router;