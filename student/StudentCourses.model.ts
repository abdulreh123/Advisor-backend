import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const StudentCoursesmodel = sequelize.define(
  "studentscourses",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    grade: {
        type: Sequelize.STRING,
      },
    midtermOne: {
        type: Sequelize.INTEGER,
      },
    midtermTwo: {
        type: Sequelize.INTEGER,
      },
    final: {
        type: Sequelize.INTEGER,
      },
    CrPts: {
        type: Sequelize.STRING,
      },
    academicYear: {
        type: Sequelize.STRING,
      },
   approvedBy: {
        type: Sequelize.STRING,
      },
  },
);

module.exports = StudentCoursesmodel;