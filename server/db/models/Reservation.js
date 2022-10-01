const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('reservation', {
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    time: {
        type: Sequelize.TIME,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    setting: {
        type: Sequelize.STRING,
    },
});