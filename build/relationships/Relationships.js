"use strict";
const Advisor = require("../advisor/model");
const Courses = require("../courses/model");
const Department = require("../department/model");
const Group = require("../courseGroup/model");
const Student = require("../student/Model");
const chairman = require("../chairman/model");
const user = require("../auth/model");
const StudentCourses = require("../student/StudentCourses.model");
const Buildings = require("../building/model");
const Rooms = require("../rooms/model");
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
Advisor.hasOne(Group, {
    as: "Lecturer",
    onDelete: "CASCADE",
    foreignKey: "lecturerId",
    hooks: true,
    sourceKey: "id",
});
Group.belongsTo(Advisor, {
    as: "Group",
    foreignKey: "lecturerId",
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
Courses.hasMany(Group, {
    as: "Groups",
    onDelete: "CASCADE",
    hooks: true,
    foreignKey: "courseId",
    sourceKey: "id",
});
Group.belongsTo(Courses, {
    as: "Course",
    onDelete: "CASCADE",
    hooks: true,
    foreignKey: "courseId",
    sourceKey: "id",
});
Student.belongsTo(Advisor, {
    as: "advisor",
    onDelete: "CASCADE",
    hooks: true,
    foreignKey: "advisorId",
    sourceKey: "id",
});
Advisor.belongsTo(Department, {
    as: "Department",
    foreignKey: "departmentId",
    targetKey: "id",
});
Student.belongsToMany(Group, {
    through: StudentCourses,
    as: "Group",
});
Group.belongsToMany(Student, {
    through: StudentCourses,
    as: "Students",
});
Buildings.hasOne(Rooms, {
    as: "Building",
    onDelete: "CASCADE",
    hooks: true,
    foreignKey: "buildingId",
    sourceKey: "id",
});
Rooms.belongsTo(Buildings, {
    as: "Rooms",
    foreignKey: "buildingId",
    sourceKey: "id",
});
