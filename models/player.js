'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  player.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },    
    playerName: DataTypes.STRING,
    playerCountry: DataTypes.STRING,
    playerClub: DataTypes.STRING,
    playerWage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'player',
  });
  return player;
};