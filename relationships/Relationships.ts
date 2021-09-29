"use strict";
const Advisor = require("../advisor/model");
const Courses = require("../courses/model");
const Department = require("../department/model");
const Student = require("../student/Model");
const chairman = require("../chairman/model");
const user = require("../auth/model");
const StudentCourses = require("../student/StudentCourses.model");


Department.hasMany(Courses, {
    as: "courses",
    onDelete: "CASCADE",
    hooks: true,
    foreignKey: "departmentId",
    sourceKey: "id",
});
chairman.hasOne(Department, {
    as: "Department",
    onDelete: "CASCADE",
    hooks: true,
    foreignKey: "chairmanId",
    sourceKey: "id",
});
Department.belongsTo(chairman, {
  as: "chairman",
  foreignKey: "chairmanId",
  sourceKey: "id",
});
user.belongsTo(chairman, {
  as: "chairman",
  foreignKey: "userChairman",
  sourceKey: "id",
});
user.belongsTo(Advisor, {
  as: "Advisor",
  foreignKey: "userAdvisor",
  sourceKey: "id",
});
user.belongsTo(Student, {
  as: "Student",
  foreignKey: "userStudent",
  sourceKey: "id",
});
Courses.belongsTo(Department, {
  as: "Department",
  foreignKey: "departmentId",
  sourceKey: "id",
});
Advisor.hasMany(Student, {
    as: "Students",
    onDelete: "CASCADE",
    hooks: true,
    foreignKey: "advisorId",
    sourceKey: "id",
});
Student.belongsTo(Advisor, {
    as: "advisor",
    onDelete: "CASCADE",
    hooks: true,
    foreignKey: "advisorId",
    sourceKey: "id",
});
Advisor.belongsTo(Department,{
  as: "Department",
  foreignKey: "departmentId",
  targetKey: "id",
});
Student.belongsToMany(Courses, {
    through: StudentCourses,
    as: "Courses",
});
Courses.belongsToMany(Student, {
    through: StudentCourses,
    as: "Students",
});