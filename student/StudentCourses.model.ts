import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const StudentCoursesModel = sequelize.define(
  "studentsCourses",
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
    CrPts: {
        type: Sequelize.STRING,
      },
    academicYear: {
        type: Sequelize.STRING,
      },
  },
);

module.exports = StudentCoursesModel;