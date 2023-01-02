import { Sequelize, Model, DataTypes } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite3"
});

export class DBModel extends Model {}
Contract.init(
  {
    terms: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("new", "in_progress", "terminated")
    }
  },
  {
    sequelize,
    modelName: "Contract"
  }
);
