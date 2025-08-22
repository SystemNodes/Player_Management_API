const { player } = require('../models');
const formatCurrency = require('../Utils/formatCurrency');

exports.createPlayer = async (req, res) => {
  try {
    const { playerName, playerCountry, playerClub, playerWage } = req.body;

    const newPlayer = await player.create({
      playerName,
      playerCountry,
      playerClub,
      playerWage
    });

    res.status(200).json({
      message: "New player successfully onboarded",
      data: {
        ...newPlayer.toJSON(),
        playerWage: formatCurrency(newPlayer.playerWage)
      }
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err.message
    });
  }
};

exports.allPlayer = async (req, res) => {
    try {
      const allPlayer = await player.findAll();
  
      const formattedPlayers = allPlayer.map(p => ({
        ...p.toJSON(),
        playerWage: formatCurrency(p.playerWage)
      }));
  
      res.status(200).json({
        message: "Kindly find below all players",
        data: formattedPlayers
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
        error: err.message
      });
    }
};

exports.eachPlayer = async (req, res) => {
    try {
      const { id } = req.params;
      const eachPlayer = await player.findByPk(id);
  
      if (!eachPlayer) {
        return res.status(404).json({
          message: `Player with ID ${id} not found`
        });
      }
  
      res.status(200).json({
        message: "Kindly find below the requested Player",
        data: {
          ...eachPlayer.toJSON(),
          playerWage: formatCurrency(eachPlayer.playerWage)
        }
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
        error: err.message
      });
    }
};

exports.updatePlayer = async (req, res) => {
    try {
      const { id } = req.params;
      const { playerName, playerCountry, playerClub, playerWage } = req.body;
  
      const [updated] = await player.update(
        { playerName, playerCountry, playerClub, playerWage },
        { where: { id } }
      );
  
      if (updated) {
        const updatedPlayer = await player.findByPk(id);
        return res.status(200).json({
          message: "Player record successfully updated",
          data: {
            ...updatedPlayer.toJSON(),
            playerWage: formatCurrency(updatedPlayer.playerWage)
          }
        });
      }
  
      res.status(404).json({
        message: `Player with id ${id} not found`
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
        error: err.message
      });
    }
  };

exports.deletePlayer = async (req, res) => {
    try {
      const { id } = req.params;
  
      const playerToDelete = await player.findByPk(id);
  
      if (!playerToDelete) {
        return res.status(404).json({
          message: `Player with id ${id} not found`
        });
      }
  
      await player.destroy({
        where: { id }
      });
  
      res.status(200).json({
        player: playerToDelete.playerName,
        id: id,
        message: "Player has been deleted successfully"
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
        error: err.message
      });
    }
};