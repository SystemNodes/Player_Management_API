'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class playerStat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      playerStat.belongsTo(models.player, {
        foreignKey: 'playerId',
        as: 'player'
      });
    }
  }
  playerStat.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    goals: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    redCard: DataTypes.INTEGER,
    yellowCard: DataTypes.INTEGER,
    playerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'players',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'playerStat',
  });
  return playerStat;
};
