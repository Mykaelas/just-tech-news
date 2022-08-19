const { Model, DataType} = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}