const {playerStat,player} = require('../models');

exports.createStats = async(req, res)=>{
    try {
        const {goals,assists,redCard,yellowCard} = req.body;
        const {playerId} = req.params;

        const createdStats = await playerStat.create({
            goals,
            assists,
            redCard,
            yellowCard,
            playerId
        });

        res.status(200).json({
            message: `Player stats created successfully`,
            data: createdStats
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal sever error",
            error: err.message
        });
    }
};

exports.allStats = async(req, res)=>{
    try {
        const allStats = await playerStat.findAll();
    
        res.status(200).json({
          message: "Kindly find below all player stats",
          data: allStats
        });
    } catch (err) {
        res.status(500).json({
          message: "Internal server error",
          error: err.message
        });
    }
};

exports.eachStat = async(req, res)=>{
    try {
        const {playerId} = req.params
        const eachStat = await playerStat.findAll({
            where: { playerId },
            include: {
                model: player,
                as: 'player'
              }
          });
    
        if (!eachStat) {
            return res.status(404).json({
              message: `Player with ID ${playerId} not found`
            });
          }
      
          res.status(200).json({
            message: "Kindly find below the requested Player stats",
            data: eachStat
          });
    } catch (err) {
          res.status(500).json({
            message: "Internal server error",
            error: err.message
          });
    }
};

exports.updateStats = async (req, res) => {
    try {
      const { playerId } = req.params;
      const { goals,assists,redCard,yellowCards } = req.body;
  
      const [updated] = await playerStat.update(
        { goals,assists,redCard,yellowCards },
        { where: { playerId } }
      );
  
      if (updated) {
        const updatedStats = await playerStat.findAll({
            where: {playerId},
        });
        return res.status(200).json({
          message: "Player stats successfully updated",
          data: updatedStats
        });
      }
  
      res.status(404).json({
        message: `Player with id ${playerId} not found`
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
        error: err.message
      });
    }
  };

  exports.deleteStat = async (req, res) => {
    try {
      const { playerId } = req.params;
  
      const statToDelete = await playerStat.findOne({
        where: { playerId },
      });
      
      if (!statToDelete) {
        return res.status(404).json({
             message: `Player with id ${playerId} not found` 
            });
      }
      
      await playerStat.destroy({
         where: { playerId } 
        });
      
      res.status(200).json({
        message: "Player stats have been deleted successfully"
      });
      
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
        error: err.message
      });
    }
};