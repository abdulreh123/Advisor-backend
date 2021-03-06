const bcrypt = require("bcrypt");
const Advisormodel = require("../advisor/model");
const Annoucementmodel = require("../annoucements/model");
const departmentModel = require("../department/model");
const Student = require("./Model");
const StudentCourses = require("./StudentCourses.model");
const Notification = require("../notifications/model");
const Courses = require("../courses/model");
const CourseRooms = require("../rooms/courseRooms.model");
const Group = require("../courseGroup/model");
import GroupService from "../courseGroup/Service";
const GroupServices = new GroupService();
const user = require("../auth/model")
const { Op, Sequelize } = require("sequelize");
import firestoreService from '../firestore/firebase'
export default class DepartmentService {
  constructor() { }
  public WEEK_DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  private hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  };
  private getAcademicYear = async () => {
    const year = await firestoreService.get(
      'academic',
      'qYX8QXS3XW564eKdfPTP'
    )
    return year.data.year
  }
  //  Create Student
  createStudent = async (data: any): Promise<any> => {
    try {
      const department = await Student.create({ ...data });
      if (data.user) {
        const password = await this.hashPassword(data.user.password)
        await user.create({ userName: data.user.userName, password: password, userStudent: department.id })
      }
      return department;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating department!");
    }
  };
  //  Get Student
  getStudents = async (): Promise<any> => {
    try {
      const departments = await Student.findAll({
        include: [
          {
            model: Advisormodel,
            as: "advisor"
          },
        ]
      });
      return departments;
    } catch (error) {
      throw error;
    }
  };
  //  Get Transcript
  getTranscript = async (studentId: number): Promise<any> => {
    try {
      const result = await Student.findOne({
        where: {
          userId: studentId
        },
        include: [
          {
            model: Advisormodel,
            as: "advisor"
          },
          {
            model: Group,
            as: "Group",
            include: [{
              model: Courses,
              as: "Course",
            }],
          }
        ],
      });
      let transcript: any = []
      let totalPts: number = 0
      let totalcredits: number = 0
      const groups = result.Group
      const approved = groups.filter((course: any) => course.studentscourses.approvedBy !== null)
      const academicYears = await approved.map((group: any) => group.studentscourses.academicYear)
      const uniqueArray = academicYears.filter(function (item: any, pos: any) {
        return academicYears.indexOf(item) == pos;
      })
      await Promise.all(await uniqueArray.map(async (group: any) => {
        let status
        const year = await groups.filter((year: any) => year.studentscourses.academicYear === group)
        const totalcrPts = await year?.map((item: any) => parseFloat(item?.studentscourses?.CrPts)).reduce((prev: number, next: number) => prev + next);
        const totalcredit = await year?.map((item: any) => parseFloat(item.Course.credit)).reduce((prev: number, next: number) => prev + next);
        // totalPts=totalPts+totalcrPts
        // totalcredits=totalcredits+totalcredit
        totalPts = totalPts + totalcrPts
        totalcredits = totalcredits + totalcredit
        const checkoIfTaken = year.map((yea: any) => {
          const exists = approved.filter((app: any) => app.courseId === yea.courseId)
          if (exists.length > 1) {
            const sort = exists.sort((a: any, b: any) => {
              return b.studentscourses.CrPts - a.studentscourses.CrPts;
            });
            const checksem = exists.filter((app: any) => app.studentscourses.academicYear === group && app.studentscourses.CrPts == sort[0]?.studentscourses.CrPts)
            if (checksem.length > 0) {
              totalcredits = totalcredits - checksem[0]?.Course.credit
              sort.map((course: any, index: number) => {
                if(index!==0){
                  totalPts = totalPts - course?.studentscourses.CrPts
                }
              })
            }
          }
        })
        if (totalcrPts / totalcredit > 2) {
          status = 'Successful '
        }
        if (totalcrPts / totalcredit > 3) {
          status = 'Honours'
        }
        if (totalcrPts / totalcredit > 3.5) {
          status = 'High honours'
        }
        if (totalcrPts / totalcredit < 2) {
          status = 'Unsuccessful '
        }
        const data = {
          year: group,
          courses: year,
          totalcrPts: totalcrPts,
          totalcredit: totalcredit,
          status: status,
          gpa: totalcrPts / totalcredit,
          cgpa: totalPts / totalcredits
        }
        transcript.push(data)
      }))
      return transcript;
    } catch (error) {
      throw error;
    }
  };
  getStudent = async (studentId: number): Promise<any> => {
    try {
      const result = await Student.findByPk(studentId, {
        include: [
          {
            model: Advisormodel,
            as: "advisor"
          },
          {
            model: departmentModel,
            as: "Department"
          },
          {
            model: Group,
            as: "Group",
            include: [{
              model: Courses,
              as: "Course",
            }]
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
  getTimeTable = async (studentId: number, year: string): Promise<any> => {
    try {
      const year = await this.getAcademicYear()
      const result = await Student.findByPk(studentId, {
        include: [
          {
            model: Group,
            as: "Group",
            where: { year: year },
            include: [{
              model: CourseRooms,
              as: "CourseRooms",
            }]
          }
        ]
      });
      if(result===null){return []}
      const groups = await result?.Group
      const timetable = await Promise.all(this.WEEK_DAYS.map(async (days: string) => {
        let weekDay: any = []
        const data = await groups.filter((f: any) =>
          f.CourseRooms.some((o: any) => days?.includes(o.day))
        )
        if (data.length > 0) {
          const x = await Promise.all(await data.map(async (day: any) => {
            const table = await day.CourseRooms.filter((dayt: any) => dayt.day === days)
            const week = await table.map((time: any) => {
              return {
                name: day.name,
                type: "custom",
                startTime: `2018-02-24T${time.timeStart}`,
                endTime: `2018-02-24T${time.timeEnd}`,
              }
            })
            return week
          }))

          weekDay.push(x)
        }
        const result = {
          [`${days}`]: weekDay
        }
        return result
      }))

      return timetable;
    } catch (error) {
      throw error;
    }
  };
  getStudentStats = async (studentId: number, departmentId: number): Promise<any> => {
    try {
      const result = await Student.findOne({
        where: {
          id: studentId
        },
        include: [
          {
            model: Group,
            as: "Group",
            include: [{
              model: Courses,
              as: "Course",
            }]
          }
        ]
      });
      const allCourses = await Courses.findAll({
        where: {
          departmentId: {
            [Op.or]: [departmentId, 4]
          }
        }
      })
      const stats = await result?.Group.filter((course: any) => course.studentscourses.grade !== null && course.studentscourses.grade !== 'FF')
      const totalDepartmentcredit = await allCourses.map((item: any) => parseInt(item.credit)).reduce((prev: number, next: number) => prev + next);
      const totalcredit = await stats.map((item: any) => parseInt(item.Course.credit)).reduce((prev: number, next: number) => prev + next);
      const data = {
        courses: allCourses.length,
        coursesTaken: stats.length,
        credit: totalDepartmentcredit,
        creditTaken: totalcredit
      }
      return data;
    } catch (error) {
      throw error;
    }
  };
  getStudentByAdvisor = async (advisorId: number): Promise<any> => {
    try {
      const result = await Student.findAll({
        where: {
          advisorId: advisorId
        },
        include: [
          {
            model: Advisormodel,
            as: "advisor"
          },
          {
            model: Group,
            as: "Group",
            include: [{
              model: Courses,
              as: "Course",
            }]
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
  CalculateCrPoints = async (grade: string, credit: number) => {
    let points: number | undefined;
    switch (grade) {
      case "AA":
        points = 4 * credit
        break;
      case "BA":
        points = 3.5 * credit
        break;
      case "BB":
        points = 3 * credit
        break;
      case "CB":
        points = 2.5 * credit
        break;
      case "CC":
        points = 2 * credit
        break;
      case "DC":
        points = 1.5 * credit
        break;
      case "DD":
        points = 1 * credit
        break;
      case "FD":
        points = 0.5 * credit
        break;
      case "FF":
        points = 0 * credit
        break;
    }
    return points
  }
  //  Update Student
  updateStudent = async (
    studentId: number,
    data: any,
  ): Promise<any> => {
    try {
      await Student.update(
        { ...data },
        { where: { id: studentId } }
      );
      const department = await this.getStudent(studentId);
      if (data.englishScore < 60) {
        await Student.update({ departmentId: 5 }, { where: { id: studentId } })
      }
      return department;
    } catch (error) {
      throw error;
    }
  };
  addRemoveCourse = async (
    studentId: number,
    data: any,
    status: string,
    name: string
  ) => {
    try {
      let error: string | undefined;
      const student = await this.getStudent(studentId);
      if (data.type == "add") {
        await Promise.all(await data.courses.map(async (course: number) => {
          const group = await GroupServices.getGroup(course)
          const prerequisites = group?.Course?.prerequisites
          if (prerequisites) {
            const allCode = student?.Group.map((group: any) => {
              if (group?.studentscourses.grade && group?.studentscourses.grade !== 'FF') {
                return (group?.Course?.code)
              }
            })
            if (allCode.includes(prerequisites)) {
              if (status === 'Student') {
                await StudentCourses.create({ studentId: studentId, courseGroupId: course, academicYear: data?.year })
              } else {
                await StudentCourses.create({ studentId: studentId, courseGroupId: course, academicYear: data?.year, approvedBy: name })
              }
            } else {
              error = `student did not take the required prerequisites for ${group.Course.name}`
            }
          } else {
            if (status === 'Student') {
              await StudentCourses.create({ studentId: studentId, courseGroupId: course, academicYear: data?.year })
            } else {
              await StudentCourses.create({ studentId: studentId, courseGroupId: course, academicYear: data?.year, approvedBy: name })
            }
          }
        }))
      }
      if (data.type === "add") {
        if (status === 'Student') {
          await Notification.create({ content: `${student.name} courses are waiting for your approval`, receiver: student.advisorId, type: "normal" })
        } else {
          await Notification.create({ content: `Your courses has been approved`, receiver: student.userId, type: "normal" })
        }
      }
      if (data.type == "remove") {
        await data.courses.map(async (course: number) => {
          await StudentCourses.destroy({ where: { studentId: studentId, courseGroupId: course, grade: null } })
        })
      }
      if (error) {
        throw Error(error)
      }
      return student;
    } catch (error) {
      throw error;
    }

  }

  updateGrade = async (
    studentId: number,
    courseId: number,
    data: any
  ): Promise<any> => {
    try {
      const course = await Group.findByPk(courseId, {
        include: [
          {
            model: Courses,
            as: 'Course'
          }
        ]
      })
      const points = await this.CalculateCrPoints(data.grade, course.Course.credit)
      await StudentCourses.update(
        {
          grade: data.grade,
          midtermOne: data.midtermOne,
          midtermTwo: data.midtermTwo,
          final: data.final,
          CrPts: points
        },
        { where: { studentId: studentId, courseGroupId: courseId } }
      );
      const student = await this.getStudent(studentId);
      await Notification.create({ content: `${course.Course.name} grades has been uploaded`, receiver: student.userId, type: "normal" })
      return student;
    } catch (error) {
      throw error;
    }
  };
  getCourseApproval = async (
    studentId: number,
  ): Promise<any> => {
    try {
      const result = await Student.findOne({
        where: {
          userId: studentId,
        },
        include: [
          {
            model: Group,
            as: "Group",
            include: [{
              model: Courses,
              as: "Course",
            }],
          }
        ]
      })
      const group = result.Group
      const notAprroved = group.filter((course: any) => course.studentscourses.approvedBy === null)
      return notAprroved;
    } catch (error) {
      throw error;
    }
  };
  approveCourse = async (
    studentId: number,
    courseId: number,
    name: string
  ): Promise<any> => {
    try {
      await StudentCourses.update(
        {
          approvedBy: name
        },
        { where: { studentId: studentId, courseGroupId: courseId, approvedBy: null } }
      );
      const student = await this.getStudent(studentId);
      return student;
    } catch (error) {
      throw error;
    }
  };
  AutomateSelection = async (
    studentId: number,
    year: string
  ): Promise<any> => {
    try {
      const student = await this.getStudent(studentId);
      const department = await departmentModel.findByPk(student.departmentId);
      const coursesTaken = await student.Group.filter((course: any) => course.studentscourses?.grade !== null &&
        course.studentscourses?.grade !== "FF").map((course: any) => {
          return course?.Course.code
        })
      // get offered courses
      const allGroup = await Group.findAll({
        where: {
          year: year
        },
        include: [
          {
            model: Courses,
            as: "Course",
            where: {
              [Op.and]: {
                departmentId: {
                  [Op.or]: [student.departmentId, 4]
                },
                facultyId: department.facultyId
              }
            }
          }
        ]
      })

      if (allGroup.length === 0) {
        const allCourses = await Courses.findAll({
          where: {
            [Op.and]: {
              departmentId: {
                [Op.or]: [student.departmentId, 4]
              },
              facultyId: department.facultyId
            }
          }
        })
        //remove courses which are taken
        const remove = await allCourses.filter((course: any) => !coursesTaken.includes(course.code))
        const prerequisites = await remove.filter((course: any) => coursesTaken.includes(course.prerequisites) || course.prerequisites === null)
        const totalcredit = await prerequisites.map((item: any) => parseInt(item.credit)).reduce((prev: number, next: number) => prev + next);
        const prerequisitesId = prerequisites.map((group: any) => group.id)
        const result = await allCourses.filter((course: any) => prerequisitesId.includes(course.id))
        let credits: number = 0
        const creditLimit = year.includes('Summer') ? 12 : 21
        const automation = await result.map((courses: any) => {
          if (totalcredit < creditLimit) {
            return courses
          } else {
            credits = credits + courses.credit
            if (credits <= creditLimit) {
              return courses
            }
          }
        })
        const removeNull = await automation.filter((Course: any) => Course !== undefined)
        return removeNull
      } else {
        const CoursesOffered = await allGroup?.map((course: any) => course.Course)
        CoursesOffered.sort((a: any, b: any) => parseFloat(a.semester) - parseFloat(b.semester));
        //remove repeated courses
        const filtered = CoursesOffered.filter((v: any, i: any, a: any) => a.findIndex((t: any) => (t.id === v.id)) === i)
        //remove courses which are taken
        const remove = await filtered.filter((course: any) => !coursesTaken.includes(course.code))
        //check if prerequisites is done
        const prerequisites = await remove.filter((course: any) => coursesTaken.includes(course.prerequisites) || course.prerequisites === null)
        const totalcredit = await prerequisites.map((item: any) => parseInt(item.credit)).reduce((prev: number, next: number) => prev + next);

        const prerequisitesId = prerequisites.map((group: any) => group.id)
        const result = await allGroup.filter((course: any) => prerequisitesId.includes(course.Course.id))
        let credits: number = 0
        const automation = await result.map((courses: any) => {
          if (totalcredit < 21) {
            return courses
          } else {
            credits = credits + courses.credit
            if (credits < 21 && credits < 19) {
              return courses
            }
          }
        })
        const removeNull = await automation.filter((Course: any) => Course !== undefined)
        return result;
      }
    } catch (error) {
      throw error;
    }
  };
  //  Delete Student
  deleteStudent = async (
    studentId: number,
  ): Promise<any> => {
    try {
      const department = await Student.findOne({
        where: {
          id: studentId,
        },
        paranoid: false,
      });
      department.destroy();
      return { message: "Advisor record deleted!" };
    } catch (error) {
      throw error
    }
  };
  getStudentAnnoucements = async (studentId: number): Promise<any> => {
    try {
      const studentGroup = await StudentCourses.findAll({
        studentId: studentId
      })
      let groupIds = await studentGroup.map((student: any) => student.groupId)
      groupIds.push(null)
      const annoucements = Annoucementmodel.findAll({
        where: {
          groupIdId: {
            [Op.or]: groupIds
          },
          include: [
            {
              model: Group,
              as: "Group"
            },
          ]
        }
      })
      return annoucements;
    } catch (error) {
      throw error;
    }
  };
}
