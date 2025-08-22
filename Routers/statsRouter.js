const router = require('express').Router();

const {
    createStats, 
    allStats,
    eachStat,
    updateStats,
    deleteStat
} = require('../Controllers/statsController')

router.post('/stats/:playerId', createStats);
router.get('/stats', allStats);
router.get('/stats/:playerId', eachStat);
router.put('/stats/:playerId', updateStats);
router.delete('/stats/:playerId', deleteStat);


module.exports = router